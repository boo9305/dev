from django.shortcuts import render

from .models import MyUser
from .serializers import MyUserSerializers

from rest_framework import viewsets


# Create your views here.
class MyUserView(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializers
