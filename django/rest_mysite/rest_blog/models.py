from django.db import models

# Create your models here.
class MyUser(models.Model):
    username = models.CharField(db_column='USERNAME', max_length=20)
    password = models.CharField(db_column='PASSWORD', max_length=20)
