from django.shortcuts import render
from django.http.response import re, HttpResponse, JsonResponse
import json


# Create your views here.

products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000,
        'category': _id * 7
    }
    for _id in range(1, 10)
]

def product_all_list(request):
    return JsonResponse(products, safe=False)


def home(request):
    return HttpResponse('<h1>Home page</h1>')


def get_one_pro(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)

    return JsonResponse({'error': 'Product not found'})

def list_all_cat(request):
    categories = []
    for product in products:
        categories.append(product['category'])
    return JsonResponse(categories, safe=False)




def get_one_cat(request, cat_id):
    category_pro = []
    for product in products:
        if product['category'] == cat_id:
            category_pro.append(product)

    return JsonResponse(category_pro, safe=False)



def get_cat(request, cat_id):
    for product in products:
        if product['category'] == cat_id:
            return JsonResponse(product['category'], safe = False)

    return JsonResponse("Page not found", safe=False)

