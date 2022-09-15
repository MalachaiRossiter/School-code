from winreg import QueryInfoKey
from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
from flask_bcrypt import Bcrypt
from flask_app.models import user
import re

bcrypt = Bcrypt(app)

DB = "band_schema"

class Band:
    def __init__(self, band):
        self.id = band['id']
        self.name = band['name']
        self.genre = band['genre']
        self.home = band['home']
        self.created_at = band["created_at"]
        self.updated_at = band["updated_at"]
        self.user = None

    #gets all bands in database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM bands JOIN users ON users.id = bands.users_id;"
        result = connectToMySQL(DB).query_db(query)
        print('result of query', result)
        return result

    #get one band based on ID
    @classmethod
    def get_band(cls,band_id):
        data = {'id': band_id}
        query = "SELECT * FROM bands WHERE id = %(id)s"
        band = connectToMySQL(DB).query_db(query, data)
        print("This is what the database has for this band: ", band)
        return cls(band[0])

    #get all bands from user
    @classmethod
    def get_user_bands(cls):
        data= {'users_id': session['user_id']}
        query = "SELECT * FROM bands WHERE users_id = %(users_id)s"
        all_user_bands = connectToMySQL(DB).query_db(query,data)
        return all_user_bands
        
    #creates a new band for the database
    @classmethod
    def create_band(cls, band):
        if not cls.validate_band(band):
            return False

        data = {
            'name': band['name'],
            'genre': band['genre'],
            'home': band['home'],
            'users_id': session['user_id']
        }
        print('This is the data: ',data)
        query = "INSERT into bands (name, genre, home, users_id) VALUES (%(name)s, %(genre)s, %(home)s, %(users_id)s);"
        new_band = connectToMySQL(DB).query_db(query,data)
        print("band has successfully been made: ", new_band)
        return True

    #updates an existing band
    @classmethod
    def update_band(cls,band, band_id):

        if not cls.validate_band(band):
            return False
        data = {
            'name': band['name'],
            'genre': band['genre'],
            'home': band['home'],
            'id': band_id
        }
        query = "UPDATE band_schema.bands SET name = %(name)s, genre = %(genre)s, home = %(home)s WHERE id = %(id)s"
        connectToMySQL(DB).query_db(query,data)
        return True


    #Band Validation
    @classmethod
    def validate_band(cls, band):
        is_valid=True
        if len(band['name']) < 2:
            flash('your band name needs to be cooler', 'band')
            is_valid=False
        if len(band['genre']) < 2:
            flash('This isnt a real genre', 'band')
            is_valid=False
        if len(band['home']) < 2:
            flash('Are you sure this is a real place?', 'band')
            is_valid=False
        return is_valid

    #Delete Band
    @classmethod
    def delete_band(cls,band_id):
        data = {
            'id': band_id
        }
        query = "DELETE FROM bands WHERE id = %(id)s"
        connectToMySQL(DB).query_db(query,data)