from flask import Flask, redirect, render_template, session, flash, request
from flask_app import app
from flask_app.models.user import User

#go to pages
@app.route('/')
def login():
    return render_template('index.html')

#page actions
@app.route('/register', methods=['POST'])
def register():
    print('request form', request.form)
    valid_user = User.create_user(request.form)
    if not valid_user:
        return redirect('/')
    session['user_id'] = valid_user.id
    
    return redirect("/recipes/home")

@app.route('/signin', methods=['POST'])
def sign_in():
    print('request for', request.form)
    valid_user = User.authenticate_user(request.form)
    if not valid_user:
        return redirect('/')

    session['user_id'] = valid_user.id
    return redirect('/recipies/home')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')