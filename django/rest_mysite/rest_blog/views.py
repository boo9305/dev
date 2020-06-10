from django.shortcuts import render

from .models import MyUser, MyPost
from .serializers import MyUserSerializers, MyPostSerializers

from rest_framework import viewsets


#Create your views here.
class MyUserView(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializers

class MyPostView(viewsets.ModelViewSet):
    queryset = MyPost.objects.all()
    serializer_class = MyPostSerializers
