import datetime

from django.db import models


class DeliveryForm(models.Model):
    date_add = models.DateField(default=datetime.date.today, editable=True, verbose_name='Дата заказа')
    time_add = models.TimeField(default=datetime.datetime.now, editable=True, verbose_name='Время заказа')
    number = models.IntegerField(verbose_name='Номер заказа', default=0)
    name = models.CharField(max_length=150, verbose_name='Имя')
    phone = models.CharField(max_length=50, verbose_name='Телефон')
    shop = models.CharField(max_length=250, verbose_name='Магазин')
    what_buy = models.TextField(blank=True, verbose_name='Что купить?')
    address = models.CharField(max_length=500, verbose_name='Адрес')
    payment = models.ForeignKey('Payment', on_delete=models.PROTECT, verbose_name='Оплата')
    personal_info = models.BooleanField(default=True,  verbose_name='Принимаю условия обработки персональных данных ')
    price = models.DecimalField(max_digits=9, decimal_places=0, verbose_name='Цена', default=0)

    def __str__(self):
        return f'Заказ № {self.number}'


class Payment(models.Model):
    pay_type = models.CharField(max_length=50, db_index=True, verbose_name='Тип оплаты')

    def __str__(self):
        return self.pay_type
