from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health_check'),
    path('generate-plan/', views.generate_plan, name='generate_plan'),
    path('download-plan/<str:filename>/', views.download_plan, name='download_plan'),
]