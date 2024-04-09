from django.shortcuts import render, redirect
from .models import user_name
# Create your views here.


def index(request):
    if request.method == 'POST':
        name = request.POST['name']
        new_greeting = user_name.objects.create(name=name)
        return redirect('greeting', name=new_greeting.name)
    return render(request, 'greetings/index.html')

def greeting(request,name):
    greeting = user_name.objects.create(name=name)

    return render(request, 'greetings/greeting.html', {
                    'greeting': greeting
                   })

