# Generated by Django 3.0.7 on 2020-06-10 08:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('rest_blog', '0004_auto_20200610_0753'),
    ]

    operations = [
        migrations.AddField(
            model_name='mypost',
            name='created_time',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='mypost',
            name='updated_time',
            field=models.DateTimeField(auto_now=True, verbose_name='updated time'),
        ),
    ]
