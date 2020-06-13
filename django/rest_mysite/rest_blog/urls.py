from django.conf.urls import url, include
#  from .views import MyPostView
from . import views
from django.conf import settings
from django.conf.urls.static import static


from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'user', views.MyUserView)
router.register(r'post', views.MyPostView, basename="post")
#  router.register(r'post', views.MyPostListView.as_view())
urlpatterns = router.urls

