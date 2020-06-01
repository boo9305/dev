from django.shortcuts import render, redirect
from django.views import generic
from django.views.generic.edit import FormView
from django.urls import reverse

from django.contrib.auth.hashers import make_password, check_password
from .models import User
from .forms import LoginForm, SignUpForm

class IndexView(generic.TemplateView):
    template_name = 'user/index.html'
    #context_object_name = 'user_name_list'

class SignUpView(FormView):
    form_class = SignUpForm
    template_name = 'user/signup.html'

    def post(self, request):
        user_id = request.POST['user_id']
        password = request.POST['password']
        
        user = User(user_id = user_id , password=make_password(password))
        user.save()
        return redirect('user:index')
        
class LoginView(FormView):
    form_class = LoginForm
    template_name = 'user/login.html'
    
    def post(self, request) :
        user_id = request.POST['user_id']
        password = request.POST['password']
        try: 
            user = User.objects.get(user_id=user_id)
            if check_password(password, user.password) :
                request.session['user_id'] = user_id
                return redirect('user:result')
        except User.DoesNotExist:
            user = None
        
        
        return redirect('user:login')
    def form_valid(self, form):
        return super().form_valid(form)

#    def get_queryset(self):
#        return User.objects.all()
#def login(request):
#    if request.method == "POST":
#        form = LoginForm(request.POST)
#        user_id = request.POST['user_id']
#        password = request.POST['password']
#        #user = authenticate(user_id = user_id, password = password)
#        #if user is not None :
#        #    login()
#        return redirect('user:index')
#        #return render(request, 'user/index.html', {'form': form})
#    else :
#        form = LoginForm()
#        return render(request, 'user/login.html', {'form': form})

class ResultView(generic.TemplateView):
    template_name = 'user/result.html'
