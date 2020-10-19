from django.urls import path

from .views import *

urlpatterns = [
    path('', CreateSendForm.as_view(), name='add_send_form'),
]
