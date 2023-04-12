
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('home/', views.home),
    path('api/products/', views.product_all_list),
    path('api/products/<int:product_id>/', views.get_one_pro),
    path('api/categories/', views.list_all_cat),
    path('api/categories/<int:cat_id>/', views.get_cat),
    path('api/categories/<int:cat_id>/products/', views.get_one_cat),

]
