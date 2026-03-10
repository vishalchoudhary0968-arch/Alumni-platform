from django.db import models

class Register(models.Model):
    full_name = models.CharField(max_length=100)
    passing_year = models.IntegerField()
    course = models.CharField(max_length=50)
    company = models.CharField(max_length=100, blank=True)
    designation = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    linkedin = models.URLField(blank=True)
    photo = models.CharField(max_length=300, blank=True)  # lowercase 'photo'

    def __str__(self):
        return self.full_name
