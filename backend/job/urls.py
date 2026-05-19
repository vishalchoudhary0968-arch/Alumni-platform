from django.urls import path
from .views import (
    get_jobs,
    create_job,
    pending_jobs,
    verify_job,
    delete_job
)

urlpatterns = [

    # ✅ verified jobs
    path('jobs/', get_jobs),

    # ✅ create job
    path('jobs/create/', create_job),

    # ✅ pending jobs
    path('jobs/pending/', pending_jobs),

    # ✅ verify job
    path('jobs/verify/<int:id>/', verify_job),

    path('jobs/delete/<int:id>/', delete_job),
]