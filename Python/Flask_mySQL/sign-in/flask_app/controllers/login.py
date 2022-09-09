from flask import render_template,session,redirect,request

from flask_app import app

@app.route('/')
def goHome():
    return redirect('/sign-in')

@app.route('/sign-in')
def SignIn():
    return render_template('index.html')