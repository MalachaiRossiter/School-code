from flask import render_template,redirect,request,session

from flask_app import app

@app.route('/pokemon')
def pokemonList():
    return render_template('pokemon.html')