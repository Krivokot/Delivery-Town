# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u1198419/data/www/delivery-town.ru/DjangoDT')
sys.path.insert(1, '/var/www/u1198419/data/djangoenv/lib/python3.8/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'DjangoDT.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()