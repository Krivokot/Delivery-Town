from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.views.generic import CreateView
from .forms import DeliveryFormForm
from .models import DeliveryForm


def delivery_form(request):
    return render(request, 'delivery_form/index.html')


class CreateSendForm(CreateView):
    model = DeliveryForm
    fields = ['name', 'phone', 'shop', 'what_buy', 'address', 'payment', 'personal_info']
    template_name = 'delivery_form/index.html'
    raise_exception = True


def add_sent_delivery_form(request):
    if request.method == 'POST':
        form = DeliveryFormForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            delivery = DeliveryForm.objects.create(**form.cleaned_data)
            delivery = form.save()
            text_for_message = f'Имя: {form.cleaned_data["name"]}\n' \
                               f'Телефон: {form.cleaned_data["phone"]}\n' \
                               f'Магазин: {form.cleaned_data["shop"]}\n' \
                               f'Что купить: {form.cleaned_data["what_buy"]}\n' \
                               f'Адрес: {form.cleaned_data["address"]}\n' \
                               f'Вид оплаты: {form.cleaned_data["payment"]}\n'
            mail = send_mail('Форма заказа Delivery town', text_for_message, 'mark.petrovich93@yandex.ru',
                             ['marchell93@mail.ru', 'krivokot186@yandex.ru'], fail_silently=True)
            if mail:
                messages.success(request, 'Форма успешно отправлена')
                return redirect('add_send_delivery_form')
        else:
            messages.error(request, 'Ошибка отправки формы')
    else:
        form = DeliveryFormForm()
    return render(request, 'delivery_form/index.html', {'form': form})
