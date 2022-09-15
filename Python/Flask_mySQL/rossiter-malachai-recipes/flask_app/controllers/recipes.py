from flask import Flask, render_template, session, redirect, request, flash
from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask import flash



#home page with table
@app.route('/recipes/home')
def homePage():
    if "user_id" not in session:
        return redirect('/')

    user = User.get_id(session['user_id'])
    recipes = Recipe.get_all()
    return render_template('home_page.html', user = user, recipes = recipes)


#Details page using the recipes ID
@app.route('/recipes/<int:recipe_id>')
def detailsPage(recipe_id):
    user = User.get_id(session["user_id"])
    recipe = Recipe.get_recipe(recipe_id)
    print("this is the recipe", recipe)
    print('This is user', user)
    return render_template('recipe_view.html', user=user, recipe = recipe)


#Creating a new Recipe
@app.route('/recipes/create')
def createPage():
    return render_template('recipe_create.html')


#Editing an existing recipe
@app.route('/recipes/edit/<int:recipe_id>')
def editPage(recipe_id):
    user = User.get_id(session['user_id'])
    recipe = Recipe.get_recipe(recipe_id)
    return render_template('recipe_edit.html', user=user, recipe = recipe)


# action methods
@app.route('/create-recipe', methods=['POST'])
def createrecipe():
    valid_recipe = Recipe.create_recipe(request.form)
    if not valid_recipe:
        return redirect('/recipes/create')
    return redirect('/recipes/home')

@app.route('/update-recipe/<int:recipe_id>', methods=['POST'])
def editrecipe(recipe_id):
    valid_recipe = Recipe.update_recipe(request.form,recipe_id)

    if not valid_recipe:
        return redirect('/recipes/edit/<int:recipe_id>')
    return redirect('/recipes/home')

@app.route('/delete-recipe/<int:recipe_id>')
def deleterecipe(recipe_id):
    Recipe.delete_recipe(recipe_id)
    return redirect('/recipes/home')