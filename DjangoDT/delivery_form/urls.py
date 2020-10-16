from django.urls import path

from .views import *

urlpatterns = [
    path('', delivery_form, name='delivery_form')
]
