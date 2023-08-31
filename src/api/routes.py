"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Job
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from google.oauth2 import id_token
from google.auth.transport import requests
from firebase_admin import auth
import firebase_admin
from firebase_admin import credentials

api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

cred = credentials.Certificate('src/api/credentials.json')

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def register():
    user_name = request.json.get("user_name", None)
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
        new_user = User(user_name = user_name, company_name = company_name, password_hash = pw_hash, company_description = company_description, phone = phone, email = email, country = country, address = address, website = website, linkedin = linkedin)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': "user registered successfully"}), 200
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
    
@api.route('/validate_token', methods=['GET'])
@jwt_required()
def validate_token():
    current_user_email = get_jwt_identity()
    user = User.query.filter_by(email = current_user_email).first()
    if user:
        return jsonify({"logged in as :": user.company_name, "isValid": True}), 200
    else:
        return jsonify({"message:": "error in token validation", "isValid": False}), 400

@api.route('/google_login', methods=['POST'])
def google_login():
    token = request.json.get("token", None)
    try:
        cred = credentials.Certificate('src/api/credentials.json')
        firebase_admin.initialize_app(cred)

        decoded_token = auth.verify_id_token(token)
        email = decoded_token['email']
        
        user = User.query.filter_by(email=email).first()
        if user:
            token = create_access_token(identity=email)
            return jsonify({"message": "logged in successfully", "authorization": token}), 200
        else:
            return jsonify({"message": "user not registered"}), 401
    except auth.InvalidIdTokenError:
        return jsonify({"message": "invalid token"}), 401


@api.route("/submitjob", methods=["POST"])
def submitjob():
    data = request.json

    job = Job(
        job_title=data["jobTitle"],
        job_description=data["jobDescription"],
        skills=data["skills"],
        job_type=data["jobType"],
        pay_rate=data["payRate"],
        experience_level=data["experienceLevel"], 
        questions="\n".join(data["questions"]),
        company_name=data["companyName"],
        company_website=data["companyWebsite"],
        company_country=data["companyCountry"],
        company_state=data["companyState"],
        company_city=data["companyCity"]
    )
    if job:
        db.session.add(job)
        db.session.commit()
        return jsonify({"message": "Job posted successfully"})
    
    return jsonify({"Error Message:": "Error creating job"})

@api.route("/jobs", methods=["GET"])
def get_jobs():
    min = request.args.get("min")
    max = request.args.get("max")
    company = request.args.get("company")
    type = request.args.get("type")

    if min and max and company and type:
        Jobs = db.session.query(Job).filter(Job.pay_rate >= min, Job.pay_rate <= max, Job.company_name == company, Job.job_type == type)
        json = [job.serialize() for job in Jobs]
        return json, 200
    if min and max and company:
        Jobs = db.session.query(Job).filter(Job.pay_rate >= min, Job.pay_rate <= max, Job.company_name == company)
        json = [job.serialize() for job in Jobs]
        return json, 200
    if min and max:
        Jobs = db.session.query(Job).filter(Job.pay_rate >= min, Job.pay_rate <= max)
        json = [job.serialize() for job in Jobs]
        return json, 200
    if company and type:
        Jobs = db.session.query(Job).filter(Job.company_name == company, Job.job_type == type)
        json = [job.serialize() for job in Jobs]
        return json, 200 
    if company:
        Jobs = db.session.query(Job).filter(Job.company_name == company)
        json = [job.serialize() for job in Jobs]
        return json, 200 
    if type:
        Jobs = db.session.query(Job).filter(Job.job_type == type)
        json = [job.serialize() for job in Jobs]
        return json, 200         
    else:
        Jobs = Job.query.all()
        json = [job.serialize() for job in Jobs]
        return json, 200
