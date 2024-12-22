from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_jobs, name='get_jobs'),  # Route for GET jobs
    path('create/', views.create_job, name='create_job'),  # Route for POST jobs
]

