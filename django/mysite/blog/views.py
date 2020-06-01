from django.shortcuts import render

from django.views import generic

from .models import Post

# Create your views here.

class BlogView(generic.ListView):
    model = Post
    context_object_name = 'post_list'
    template_name = 'blog/index.html'
    
    #def get_queryset(self):
    #    print(Post.objects.count())
    #    return Post.objects.all()
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['post'] = Post.objects.all();
        return context

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
