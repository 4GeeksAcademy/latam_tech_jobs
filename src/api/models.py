from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    company_name = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(80), unique=False, nullable=False)
    company_description = db.Column(db.String(1000), unique=False, nullable=False)
    phone = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    country = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    website = db.Column(db.String(120), unique=False, nullable=False)
    linkedin = db.Column(db.String(120), unique=False, nullable=False)
    creation_date = db.Column(db.DateTime)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "company_description": self.company_description,
            "phone": self.phone, 
            "email": self.email,
            "country": self.country,
            "address": self.address,
            "website": self.website,
            "linkedin": self.linkedin,
            "creation_date": self.creation_date
            # do not serialize the password, its a security breach
        }