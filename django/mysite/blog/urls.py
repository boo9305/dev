from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

app_name = 'blog'

urlpatterns = [ 
        path('', views.IndexView.as_view(), name='index'),
        path('sign_in/', views.SignInView.as_view(), name='sign_in'),
        path('sign_up/', views.SignUpView.as_view(), name='sign_up'),
        path('post_list/', views.BlogView.as_view(), name='post_list'),
        path('post_create/', views.PostCreate.as_view(), name='post_create'),
        path('<int:pk>/', views.PostDetail.as_view(), name='post_detail'),
        path('<int:pk>/post_edit/', views.PostEdit.as_view(), name='post_edit'),
        path('<int:pk>/post_delete/', views.PostDelete.as_view(), name='post_delete'),
        path('login/', auth_views.LoginView.as_view(template_name='blog/sign_in.html')),
        path('logout/', views.LogoutView.as_view(), name='logout' ),
        ]
        
