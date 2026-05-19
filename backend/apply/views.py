from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application
from .serializers import ApplicationSerializer

# 🔹 CREATE
@api_view(['POST'])
def create_application(request):
    serializer = ApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"msg": "Created"})
    return Response(serializer.errors)

# 🔹 READ (ALL)
@api_view(['GET'])
def list_applications(request):
    data = Application.objects.all()
    serializer = ApplicationSerializer(data, many=True)
    return Response(serializer.data)

# 🔹 UPDATE
@api_view(['PUT'])
def update_application(request, id):
    try:
        obj = Application.objects.get(id=id)
    except Application.DoesNotExist:
        return Response({"error": "Not found"})

    serializer = ApplicationSerializer(obj, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"msg": "Updated"})
    return Response(serializer.errors)

# 🔹 DELETE
@api_view(['DELETE'])
def delete_application(request, id):
    try:
        obj = Application.objects.get(id=id)
        obj.delete()
        return Response({"msg": "Deleted"})
    except Application.DoesNotExist:
        return Response({"error": "Not found"})