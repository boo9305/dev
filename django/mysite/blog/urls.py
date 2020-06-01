from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [ 
        path('', views.BlogView.as_view(), name='index'),
        path('<int:pk>/', views.PostDetail.as_view(), name='post_detail'),
        ]
