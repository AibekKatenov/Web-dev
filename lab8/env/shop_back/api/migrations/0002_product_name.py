# Generated by Django 4.1.7 on 2023-04-02 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
    ]