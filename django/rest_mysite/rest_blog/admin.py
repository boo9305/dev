from django.contrib import admin
from .models import MyUser , MyPost

admin.site.register(MyUser)
admin.site.register(MyPost)

# Register your models here.
