from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer


# ✅ GET VERIFIED JOBS
@api_view(['GET'])
def get_jobs(request):

    jobs = Job.objects.filter(is_verified=True)

    serializer = JobSerializer(jobs, many=True)

    return Response(serializer.data)


# ✅ CREATE JOB
@api_view(['POST'])
def create_job(request):

    serializer = JobSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response({
            "msg": "Job Created Successfully ✅"
        })

    return Response(serializer.errors)


# ✅ GET PENDING JOBS
@api_view(['GET'])
def pending_jobs(request):

    jobs = Job.objects.filter(is_verified=False)

    serializer = JobSerializer(jobs, many=True)

    return Response(serializer.data)


# ✅ VERIFY JOB
@api_view(['PUT'])
def verify_job(request, id):

    try:
        job = Job.objects.get(id=id)

    except Job.DoesNotExist:
        return Response({
            "error": "Job Not Found ❌"
        })

    job.is_verified = True
    job.save()

    return Response({
        "msg": "Job Verified ✅"
    })

    # 🔴 DELETE APPLICATION

@api_view(['DELETE'])
def delete_job(request, id):

    try:

        job = Job.objects.get(id=id)

        job.delete()

        return Response({
            "msg": "Job Deleted ✅"
        })

    except Job.DoesNotExist:

        return Response({
            "error": "Job Not Found ❌"
        })