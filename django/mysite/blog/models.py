from django.db import models

from django.db.models.signals import post_save
from django.dispatch import receiver

from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, AbstractUser, User


#class BaseUserManager(BaseUserManager):
#    def create_user(self):
#    def create_superuser(self):
#        )

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length = 100)
    main = models.CharField(max_length = 1000)
    create_date = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title

class MyUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100) 


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        print("create\n")
