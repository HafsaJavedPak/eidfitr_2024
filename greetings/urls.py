from django.urls import path

from . import views


urlpatterns = [
    path("", views.index, name="home"),
    path("greeting/<str:name>", views.greeting, name="greeting"),
]
