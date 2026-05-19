from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('register.urls')),  # register app ke URLs include
    path('api/', include('apply.urls')),    
    path('api/job/', include('job.urls')),        #job create ke liye
]
