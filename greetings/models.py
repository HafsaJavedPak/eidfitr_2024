from django.db import models

class user_name(models.Model):
    name = models.CharField(max_length=255)