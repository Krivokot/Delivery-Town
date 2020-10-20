from django.urls import path

from .views import *

urlpatterns = [
    path('', add_sent_delivery_form, name='add_send_delivery_form'),
]
