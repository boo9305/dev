from django.shortcuts import render,redirect

from django.views import generic

from django.urls import reverse_lazy

from django.utils import timezone

from django.contrib.auth import logout, login, authenticate

#from .models import Post, User
from .models import Post

from .forms import UserForm, NewUserForm
# Create your views here.

class LogoutView(generic.base.View):
    def get(self, request):
        logout(request)
        return redirect('blog:index')

#class IndexView(generic.base.TemplateResponseMixin, generic.base.View):
class IndexView(generic.TemplateView):
#    model = User
    template_name = 'blog/index.html'
#    context_object_name = "user_list"    
#    def get(self,request):
#        if request.user.is_authenticated:
#            print("login\n")
#        else :
#            print("logout\n")
#
#        return render(request, self.template_name)
class SignInView(generic.FormView):
    form_class = UserForm
    template_name = 'blog/sign_in.html'
    
    def post(self, request):
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(username = username, password = password)
        if user is not None:
            print("login")
            login(request = request, user = user)
        return redirect("blog:index")

class SignUpView(generic.FormView):
    form_class = NewUserForm
    template_name = 'blog/sign_up.html'

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)
    
    success_url = "/blog/"
class BlogView(generic.ListView):
    model = Post
    template_name = 'blog/post_list.html'
    
    #def get_queryset(self):
    #    print(Post.objects.count())
    #    return Post.objects.all()
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['post'] = Post.objects.all();
        return context

class PostEdit(generic.edit.UpdateView):
    model = Post
    fields = ['title']
    template_name = 'blog/post_create.html'
    success_url = reverse_lazy('blog:index')

class PostDelete(generic.edit.DeleteView):
    model = Post
    success_url = reverse_lazy('blog:index')

class PostDetail(generic.DetailView):
    # set model of this view
    model = Post
    # set template name of this view
    template_name = 'blog/post_detail.html'
    # set return query name
    context_object_name = 'post_detail'

    def get_object(self):
        print(Post.objects.get(pk=self.kwargs['pk']))
        return Post.objects.get(pk=self.kwargs['pk'])


    #def get_context_data(self, **kwargs):
    #    context = super().get_context_data(**kwargs)
    #    context['post_detail'] = Post.objects.get(pk=self.kwargs['pk'])
    #    print(self.object.pk)
    #    return context

class PostCreate(generic.edit.CreateView):
    model = Post
    template_name = 'blog/post_create.html'

    fields = ['title', 'main']
    success_url = reverse_lazy('blog:post_list')
    def post(self, request):
        title = request.POST['title']
        main = request.POST['main']
        
        post = Post(title=title, main=main)
        post.save()

        return redirect('blog:post_list')
#    def post(self, request) :
#        return redirect('blog:index')
        
