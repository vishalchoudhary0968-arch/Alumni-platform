from django.urls import path
from . import views

urlpatterns = [
    path("list/", views.PatientList, name="patient-list"),    # GET
    path("create/", views.registerCreate, name="register-create"),  # POST
    path("update/<int:id>/", views.PatientUpdate, name="patient-update"),  # PUT
    path("delete/<int:id>/", views.PatientDelete, name="patient-delete"),  # DELETE
]
