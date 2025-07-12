from django.shortcuts import redirect, render
from .models import *
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

def base(request):
    return render(request, "base.html")

@login_required(login_url = '/login_page')
def index(request):
    if request.method == 'POST':
        data = request.POST

        name = data.get('name')
        description = data.get('description')
        image = request.FILES.get('image')
        
        recipe_data.objects.create(
            name = name,
            description = description,
            image = image
        )
        return redirect('/addrecipe')

    data = recipe_data.objects.all()
    
    context = {'context' : data}

    return render(request, "index.html",  context)

def delete_recipe(request, id):
    dlt_query = recipe_data.objects.get(id = id)
    dlt_query.delete()

    return redirect('/addrecipe')

def logout_page(request):
    logout(request)
    return redirect('/login_page')

def login_page(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
    
        if not User.objects.filter(username = username).exists():
            messages.info(request, 'user not exists')
            return redirect('/login_page')
        
        user = authenticate(username = username, password = password)
        if user == None:
            messages.info(request, "Wrong password")
            return redirect('/login_page')
        else:    
            login(request, user)
            return redirect('/addrecipe')

    return render(request, 'login_page.html')

def registration(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = User.objects.filter(username = username)
        if user.exists():
            messages.info(request, 'username already exists. try another one')
            return redirect('/registration')
        
        user = User.objects.create(
            username = username
        )
        user.set_password(password)
        user.save()        
        messages.info(request, 'account created succesfully')

    return render(request, 'registration.html')