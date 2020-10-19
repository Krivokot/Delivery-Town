from django.contrib import admin
from .models import DeliveryForm, Payment


class DeliveryFormAdmin(admin.ModelAdmin):
    pass


class PaymentAdmin(admin.ModelAdmin):
    pass


admin.site.register(DeliveryForm, DeliveryFormAdmin)
admin.site.register(Payment, PaymentAdmin)

admin.site.site_title = 'Форма доставки'
admin.site.site_header = 'Delivery Town Project'
