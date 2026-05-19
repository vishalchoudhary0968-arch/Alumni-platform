from django.urls import path
from . import views

urlpatterns = [
    path('apply/', views.create_application),
    path('applications/', views.list_applications),
    path('update/<int:id>/', views.update_application),
    path('delete/<int:id>/', views.delete_application),
]