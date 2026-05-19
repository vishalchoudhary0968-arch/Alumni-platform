from django.db import models

class Job(models.Model):
    company = models.CharField(max_length=100)
    logo = models.URLField()
    position = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    posted = models.CharField(max_length=50)

     # ✅ verification field
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.company