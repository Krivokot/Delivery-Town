from django import forms
from .models import DeliveryForm


class DeliveryFormForm(forms.ModelForm):
    class Meta:
        model = DeliveryForm
        fields = ['name', 'phone', 'shop', 'what_buy', 'address', 'payment', 'personal_info']
