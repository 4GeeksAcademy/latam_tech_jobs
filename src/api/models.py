from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    job_title = db.Column(db.String(255), nullable=False)
    job_description = db.Column(db.String(2000), nullable=False)
    skills = db.Column(db.String(255), nullable=False)
    job_type = db.Column(db.String(100))
    pay_rate = db.Column(db.Float)
    experience_level = db.Column(db.String(100))
    questions = db.Column(db.Text)
    company_name = db.Column(db.String(255), nullable=False)
    company_website = db.Column(db.String(255), nullable=False)
    company_country = db.Column(db.String(100), nullable=False)
    company_state = db.Column(db.String(100), nullable=False)
    company_city = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    creation_date = db.Column(db.DateTime)

    def __repr__(self):
        return f'<User {self.job_title}>'

    def serialize(self):
        return {
            "id": self.id,
            "job_title": self.job_title,
            "pay_rate": self.pay_rate,
            "experience_level": self.experience_level,
            "questions": self.questions,
            "company_name": self.company_name,
            "company_website": self.company_website,
            "company_country": self.company_country,
            "company_city": self.company_city,
            "job_type": self.job_type,
            "creation_date": self.creation_date
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    user_name = db.Column(db.String(100), unique=False, nullable=False)
    company_name = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(80), unique=False, nullable=False)
    company_description = db.Column(db.String(1000), unique=False, nullable=False)
    phone = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    country = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    website = db.Column(db.String(120), unique=False, nullable=False)
    linkedin = db.Column(db.String(120), unique=False, nullable=False)
    job = db.relationship('Job', backref='user', lazy='dynamic', cascade = 'all, delete, delete, delete-orphan')
    creation_date = db.Column(db.DateTime)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
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