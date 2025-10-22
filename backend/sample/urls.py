from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/admin/',views.admin,name='admin'),
    path('register/',views.register , name='register'),
    path('register_api/',views.register_api,name='register_api'),
    path('api/userlogin/',views.userlogin, name='userlogin'),
    path('api/adminlogin/',views.adminlogin, name='adminlogin'),
    path('api/pending/',views.pending,name='pending'),
    path('api/pending_Id/<int:item_id>/',views.pending_Id,name='pending_Id'),
    path('api/approve/',views.approve,name='approve'),
    path('api/feedback/',views.feedback,name="feedback")
]    



# from django.urls import path
# from .import views

# urlpatterns=[
#     path("register/",views.Register),
#     path('add/',views.Register_add)
# ]