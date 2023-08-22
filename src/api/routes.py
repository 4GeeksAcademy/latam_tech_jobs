"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    company_name = request.json.get("company_name", None)
    password = request.json.get("password", None)
    company_description = request.json.get("company_description", None)
    phone = request.json.get("phone", None)
    email = request.json.get("email", None)
    country = request.json.get("country", None)
    address = request.json.get("address", None)
    website = request.json.get("website", None)
    linkedin = request.json.get("linkedin", None)    

    if email and password: 
        pw_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(company_name = company_name, password_hash = pw_hash, company_description = company_description, phone = phone, email = email, country = country, address = address, website = website, linkedin = linkedin)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': "user registered successfully"}), 201
    else:
        return jsonify({'messge': "error"}), 401
    
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    pwd_to_check = request.json.get("password", None)
    user = User.query.filter_by(email = email).first()
    if user:
        validate = bcrypt.check_password_hash(user.password_hash, pwd_to_check)
    if validate == True:
        token = create_access_token(identity = email)
        return jsonify({"message": "logged in successfully", "authorization": token}), 200
    else:
        return jsonify({"message": "authentication failed"}), 401
    
@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email = current_user_email).first()

    return jsonify({"logged in as :": user.company_name})