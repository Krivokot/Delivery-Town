from django import forms
from .models import DeliveryForm


class DeliveryFormForm(forms.ModelForm):
    class Meta:
        model = DeliveryForm
        fields = ['name', 'phone', 'shop', 'what_buy', 'address', 'payment', 'personal_info']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'main-form-fieldset__item-field',
                                           'placeholder': 'Введите имя'}),
            'phone': forms.TextInput(attrs={'class': 'main-form-fieldset__item-field',
                                            'placeholder': 'Введите номер телефона',
                                            'type': 'phone'}),
            'shop': forms.TextInput(attrs={'class': 'main-form-fieldset__item-field',
                                           'placeholder': 'Введите заведение'}),
            'what_buy': forms.Textarea(attrs={'class': 'main-form-fieldset__item-field '
                                                       'main-form-fieldset__item-field--big',
                                              'cols': '20',
                                              'rows': '10',
                                              'placeholder': 'Введите список товаров и количество'}),
            'address': forms.TextInput(attrs={'class': 'main-form-fieldset__item-field',
                                              'placeholder': 'Введите адрес доставки'}),
            'payment': forms.Select(
                attrs={'class': 'main-form-fieldset__item-field main-form-fieldset__item-field--pay',
                       'placeholder': 'Введите адрес доставки'}),
            'personal_info': forms.CheckboxInput(attrs={'class': 'visually-hidden main-form-fieldset__item-field '
                                                                 'main-form-fieldset__item-field--check'})

        }
