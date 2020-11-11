from django.contrib import admin
from .models import DeliveryForm, Payment
from import_export import resources
from import_export.admin import ImportExportModelAdmin


class DeliveryFormResource(resources.ModelResource):
    class Meta:
        model = DeliveryForm


class DeliveryFormAdmin(ImportExportModelAdmin):
    list_display = ('pk', 'created_at', 'name', 'phone', 'payment', 'price')
    list_display_links = ('pk', 'created_at', 'name')
    resource_class = DeliveryFormResource


class PaymentAdmin(admin.ModelAdmin):
    pass


admin.site.register(DeliveryForm, DeliveryFormAdmin)
admin.site.register(Payment, PaymentAdmin)

admin.site.site_title = 'Форма доставки'
admin.site.site_header = 'Delivery Town Project'
