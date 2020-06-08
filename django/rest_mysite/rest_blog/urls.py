from django.conf.urls import url, include
from . import views

from django.conf import settings
from django.conf.urls.static import static


from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'', views.MyUserView)
urlpatterns = router.urls

