from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from .forms import DeliveryFormForm
from .models import DeliveryForm


def add_send_delivery_form(request):
    if request.method == 'POST':
        form = DeliveryFormForm(request.POST)
        if form.is_valid():
            text_for_message = f'Имя: {form.cleaned_data["name"]}\n' \
                               f'Телефон: {form.cleaned_data["phone"]}\n' \
                               f'Магазин: {form.cleaned_data["shop"]}\n' \
                               f'Что купить: {form.cleaned_data["what_buy"]}\n' \
                               f'Адрес: {form.cleaned_data["address"]}\n' \
                               f'Вид оплаты: {form.cleaned_data["payment"]}\n'
            send_mail('Форма заказа Delivery town', text_for_message, 'marchellopatrioti@gmail.com', ['marchell93@mail.ru', 'bisness.temr@gmail.com'], fail_silently=False)
            DeliveryForm.objects.create(**form.cleaned_data)
            return redirect('add_send_delivery_form')
        else:
            messages.error(request, 'Ошибка отправки формы')
    else:
        form = DeliveryFormForm()
    return render(request, 'delivery_form/index.html', {'form': form})
