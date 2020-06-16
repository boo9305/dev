from django.shortcuts import render

from .models import MyUser, MyPost
from .serializers import MyUserSerializers, MyPostSerializers
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.authentication import TokenAuthentication


#Create your views here.
class MyUserView(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializers

#  class MyPostView(viewsets.ViewSet): # It is possible to R
class MyPostView(viewsets.ModelViewSet): # It is possible to C, R ,U ,D
    queryset = MyPost.objects.all()
    serializer_class = MyPostSerializers
    #permission_classes = [AllowAny]
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAdminUser]

    # list view query 
    #  def list(self, request):
    #      print("list")
    #      queryset = MyPost.objects.all()
    #      serializer = self.get_serializer(queryset, many=True)
    #      return Response(serializer.data)
    #
    #  # detail view query
    #  def retrieve(self, request, pk=None):
    #      print("retrieve")
    #      post = MyPost.objects.get(pk=pk)
    #      serializer = self.get_serializer(post)
    #      return Response({ 'title' : post.title })
    #      return Response(serializer.data)
    #
    #  def get_permission(self):
    #      print("get_permission")
    #      if self.action == "list":
    #          permission_class = []
    #      return permission_class

    # This is decorator
    @action(detail=False)
    def post_list(self, request):
        post = MyPost.objects.all()
        serializer = self.get_serializer(post, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get' ,'post' , 'delete'])
    def tmp(self, request, pk=None):
        author = self.get_object().author
        return Response({ 'title' : author.username})
        return Response(serializer.data)
    #  def list(self, request):
    #      queryset = MyPost.objects.all()
    #      serializer = MyPostSerializers(queryset)
    #      print("list ", serializer.data)
    #      return Response(serializer.data)
    
    #  def get_permissions(self):
    #      if self.action == 'list' :
    #          permission_classes = [IsAuthenticated]
    #      else:
    #          permission_classes = [IsAdmin]
    #      return [permission() for permission in permission_classes]


#  class MyPostListView(generics.ListAPIView):
#      queryset = MyPost.objects.all()
#      serializer_class = MyUserSerializers;


