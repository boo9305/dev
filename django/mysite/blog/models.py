from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length = 100)
    main = models.CharField(max_length = 1000)
    create_date = models.DateTimeField("create date")

    def __str__(self):
        return self.title
