from django.shortcuts import render

from .models import MyUser, MyPost
from .serializers import MyUserSerializers, MyPostSerializers
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.decorators import action


#Create your views here.
class MyUserView(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializers

#  class MyPostView(viewsets.ViewSet): # It is possible to R
class MyPostView(viewsets.ModelViewSet): # It is possible to C, R ,U ,D
    queryset = MyPost.objects.all()
    serializer_class = MyPostSerializers

    #  def get_permissions(self):
    #      if self.action == 'list' :
    #          permission_classes = [IsAuthenticated]
    #      else:
    #          permission_classes = [IsAdmin]
    #      return [permission() for permission in permission_classes]

    @action(detail=False)
    def post_list(self, request):
        post = MyPost.objects.all()
        serializer = self.get_serializer(post, many=True)
        #  print(serializer.data)
        #  if serializer.is_valid():
        #      print("ok")
        return Response(serializer.data)

    @action(detail=True, methods=['get' ,'post' , 'delete'])
    def tmp(self, request, pk=None):
        author = self.get_object().author
#        author = MyUser.objects.get(pk=author_pk)
        #serializer = MyUserSerializers(authord)
        #print(serializer.data)
        return Response({ 'title' : author.username})
        return Response(serializer.data)
        #  return Response({"tt","t"})
    #  def list(self, request):
    #      queryset = MyPost.objects.all()
    #      serializer = MyPostSerializers(queryset)
    #      print("list ", serializer.data)
    #      return Response(serializer.data)

#  class MyPostListView(generics.ListAPIView):
#      queryset = MyPost.objects.all()
#      serializer_class = MyUserSerializers;


