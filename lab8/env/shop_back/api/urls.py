
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('home/', views.home),                            #done
    path('api/products/', views.product_all_list),              #done
    path('api/products/<int:product_id>/', views.get_one_pro),        #done
    path('api/categories/', views.list_all_cat),                             #done
    path('api/categories/<int:cat_id>/', views.get_cat),                         #done
    path('api/categories/<int:cat_id>/products/', views.get_one_cat),

]
