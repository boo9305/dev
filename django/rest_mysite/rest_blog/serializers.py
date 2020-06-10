from .models import MyUser, MyPost
from rest_framework import serializers

class MyUserSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MyUser
        fields = ('pk', 'username' , 'password' ) 

class MyPostSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MyPost
        #  fields = ( 'title', 'desc', 'create_time', 'updated_time')
        fields = ('pk', 'title', 'desc', 'updated_time')
