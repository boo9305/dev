from django.urls import path


from . import views

app_name = 'user'

urlpatterns = [ 
        path('', views.IndexView.as_view(), name='index'),
        path('login/', views.LoginView.as_view(), name='login'),
        path('signup/', views.SignUpView.as_view(), name='signup'),
        path('result/', views.ResultView.as_view(), name='result'),
        #path('login/', views.login, name='login'),
        ]
