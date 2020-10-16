from django.shortcuts import render


def delivery_form(request):
    return render(request, 'delivery_form/index.html')
