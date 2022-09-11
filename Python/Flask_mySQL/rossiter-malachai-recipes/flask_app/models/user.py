from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_bcrypt import Bcrypt
from flask_app.models import recipe
import re

bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
DB = "recipes_schema"

class User:
    def __init__(self,user):
        self.id = user['id']
        self.first_name = user['first_name']
        self.last_name = user['last_name']
        self.email = user['email']
        self.created_at = user['created_at']
        self.updated_at = user['updated_at']



    #Checks if the email is in the database already. ---Step 2 in Authenticating the New User, Go back to finish step 1
    @classmethod
    def get_email(cls,email):
        data = {"email": email}

        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL.query_db(query,data)
        if len(result) < 1:
            return False
        return cls(result[0])


    #checking if the username has been filled out propperly ---Step 1 in Authentication
    @classmethod
    def validate_user(user):
        is_valid = True
        if len(user['first_name']) < 2:
            is_valid = False
            flash('First name needs to be longer, but im not going to say how much longer cause you can use your big brain')
        if len(user['last_name']) < 3:
            is_valid = False
            flash('Last Name needs to be longer, but im not going to say how much longer cause you can use your big brain')
        if not EMAIL_REGEX.match(user['email']):
            is_valid = False
            flash('this aint no email chump')
        if not user['password'] == user['confirm_password']:
            flash('yo you cant type very well can you')
            is_valid = False

        #checking for an existing email
        used_email = User.get_email(user['email'])
        if used_email:
            flash("An account already has that email nerd")
            valid=False

        return is_valid