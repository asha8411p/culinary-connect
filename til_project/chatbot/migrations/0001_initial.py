# Generated by Django 4.2.6 on 2023-10-31 06:57

import chatbot.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', chatbot.models.CaseInsensitiveCharField(max_length=200, unique=True)),
            ],
        ),
    ]