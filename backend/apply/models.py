from django.db import models

class Application(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=100)

    work_type = models.CharField(max_length=50, blank=True)
    location = models.CharField(max_length=100)
    skills = models.CharField(max_length=200)   
    experience = models.IntegerField()
    resume = models.URLField(blank=True)   
    created_at = models.DateTimeField(auto_now_add=True)

    # ✅ NEW FIELD
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name