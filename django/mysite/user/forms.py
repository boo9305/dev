from django import forms

from .models import User

class SignUpForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['user_id', 'password', 'address' , 'email']


class LoginForm(forms.ModelForm):
    #user_id = forms.CharField(label='user_id', max_length=30)
    #password = forms.CharField(label='password', max_length=30)
    class Meta:
        model = User
        fields = ['user_id', 'password']
