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
            create_form = form.save(commit=False)
            create_form.number = DeliveryForm.objects.count() + 1
            create_form.name = form.cleaned_data["name"]
            create_form.phone = form.cleaned_data["phone"]
            create_form.shop = form.cleaned_data["shop"]
            create_form.what_buy = form.cleaned_data["what_buy"]
            create_form.address = form.cleaned_data["address"]
            create_form.payment = form.cleaned_data["payment"]
            create_form.personal_info = form.cleaned_data["personal_info"]
            create_form.save()
            return redirect('add_send_delivery_form')
        else:
            messages.error(request, 'Ошибка отправки формы')
    else:
        form = DeliveryFormForm()
    return render(request, 'delivery_form/index.html', {'form': form})
