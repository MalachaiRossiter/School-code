from flask import Flask, render_template, session, redirect, request, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask import flash

@app.route('/recipes/home')
def homePage():
    if "user_id" not in session:
        return redirect('/')

    user = User.get_id(session['user_id'])
    recipes = Recipe.get_all()
    return render_template('home_page.html', user = user, recipes = recipes)

@app.route('/recipes/create')
def createPage():
    return render_template('recipe_create.html')





# action methods
@app.route('/create-recipe', methods=['POST'])
def createrecipe():
    valid_recipe = Recipe.create_recipe(request.form)
    if not valid_recipe:
        return redirect('/recipes/create')
    return redirect('/recipes/home')