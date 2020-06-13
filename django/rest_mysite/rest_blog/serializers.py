from .models import MyUser, MyPost
from rest_framework import serializers

class MyUserSerializers(serializers.ModelSerializer):
    post = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = MyUser
        fields = ('pk', 'username' , 'password' , 'post') 

class MyPostSerializers(serializers.ModelSerializer):
    #  title  = serializers.TextField()
    #  desc   = serializers.TextField()

    class Meta:
        model = MyPost
        #  fields = ('pk', 'title', 'desc', 'updated_time')
        fields = ('pk', 'author', 'title', 'desc', 'updated_time')
