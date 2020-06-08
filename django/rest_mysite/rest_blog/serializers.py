from .models import MyUser
from rest_framework import serializers

class MyUserSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MyUser
        fields = ( 'username' , 'password' )
