from django.shortcuts import render
from django.views.generic import CreateView
from .forms import DeliveryFormForm


def delivery_form(request):
    return render(request, 'delivery_form/index.html')


class CreateSendForm(CreateView):
    form_class = DeliveryFormForm
    template_name = 'delivery_form/index.html'
    raise_exception = True
