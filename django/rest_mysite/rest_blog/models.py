from django.db import models

# Create your models here.
class MyUser(models.Model):
    username = models.CharField(db_column='USERNAME', max_length=20)
    password = models.CharField(db_column='PASSWORD', max_length=20)

class MyPost(models.Model):
    author = models.ForeignKey(MyUser, related_name='post', on_delete=models.CASCADE)

    title = models.TextField()
    desc = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    #  updated_time = models.DateTimeField(auto_now=True)
    updated_time = models.DateTimeField("updated time", auto_now=True)

    def __str__(self):
        return self.title
