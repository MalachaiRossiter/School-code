from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
from flask_bcrypt import Bcrypt
from flask_app.models import user
import re

bcrypt = Bcrypt(app)

DB = "recipes_schema"

class Recipe:
    def __init__(self, recipe):
        self.id = recipe['id']
        self.name = recipe['name']
        self.description = recipe['description']
        self.instruction = recipe['instruction']
        self.time = recipe['time30']
        self.date = recipe['date']
        self.created_at = recipe["created_at"]
        self.updated_at = recipe["updated_at"]
        self.user = None

    @classmethod
    def create_recipe(cls, recipe):

        if not cls.validate_recipe(recipe):
            return False
        
        data = {
            'name': recipe['name'],
            'description': recipe['description'],
            'instruction': recipe['instruction'],
            'time30': recipe['time30'],
            'date': recipe['date'],
            'users_id': session['user_id']
        }
        print("data is cool", data)
        query = "INSERT into recipes (name, description, instruction, time30, date, users_id) VALUES (%(name)s, %(description)s, %(instruction)s, %(time30)s, %(date)s, %(users_id)s);"
        new_recipe = connectToMySQL(DB).query_db(query,data)
        print(new_recipe)
        return True

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        result = connectToMySQL(DB).query_db(query)
        print('result of query', result)
        return result

    @classmethod
    def validate_recipe(cls, recipe):
        is_valid=True
        if len(recipe['name']) < 1:
            flash('there isnt enough information')
            is_valid=False
            return is_valid
        if len(recipe['description']) < 1:
            flash('there isnt enough information')
            is_valid=False
            return is_valid
        return is_valid

