from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length = 20)
    password = models.CharField(max_length = 20)
    address = models.CharField(max_length = 200, default = "")
    email = models.EmailField(max_length = 100, default = "")
    create_date = models.DateTimeField("create date")

    def __str__(self):
        return self.user_id
# Create your models here.

