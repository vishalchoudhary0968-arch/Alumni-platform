from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Register
from .serializers import RegisterSerializer

# List all alumni
@api_view(['GET'])
def PatientList(request):
    patients = Register.objects.all()
    serializer = RegisterSerializer(patients, many=True)
    return Response(serializer.data)

# Create new alumni
@api_view(['POST'])
def registerCreate(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success"})
    else:
        return Response({"status": "error", "errors": serializer.errors})

# Update alumni
@api_view(['PUT'])
def PatientUpdate(request, id):
    try:
        patient = Register.objects.get(id=id)
    except Register.DoesNotExist:
        return Response({"status": "error", "message": "Alumni not found"})

    serializer = RegisterSerializer(patient, data=request.data, partial=True)  # partial allows partial updates
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success"})
    else:
        return Response({"status": "error", "errors": serializer.errors})

# Delete alumni
@api_view(['DELETE'])
def PatientDelete(request, id):
    try:
        patient = Register.objects.get(id=id)
        patient.delete()
        return Response({"status": "success"})
    except Register.DoesNotExist:
        return Response({"status": "error", "message": "Alumni not found"})
