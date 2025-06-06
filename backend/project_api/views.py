import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse, HttpResponse, Http404
from django.conf import settings
from .ai_service import ProjectPlanningService

@api_view(['GET'])
def health_check(request):
    """Health check endpoint"""
    return Response({
        "status": "healthy",
        "message": "BuildPilot AI backend is running"
    })

@api_view(['POST'])
def generate_plan(request):
    """Generate project plan endpoint"""
    try:
        # Validate request data
        project_name = request.data.get('project_name')
        project_description = request.data.get('project_description')
        
        if not project_name or not project_description:
            return Response({
                "error": "Both project_name and project_description are required"
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Check for OpenAI API key
        if not os.getenv("OPENAI_API_KEY"):
            return Response({
                "error": "OpenAI API key not configured"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        # Generate project plan
        service = ProjectPlanningService()
        plan = service.generate_project_plan(project_name, project_description)
        
        # # Save plan to file
        # file_path = service.save_plan_to_file(project_name, plan)
        
        return Response({
            "message": "success",
            "plan": plan
        })
        
    except Exception as e:
        return Response({
            "error": f"An error occurred: {str(e)}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# @api_view(['GET'])
# def download_plan(request, filename):
#     """Download generated plan as markdown file"""
#     try:
#         file_path = settings.GENERATED_PLANS_DIR / filename
        
#         if not file_path.exists():
#             raise Http404("Plan file not found")
        
#         with open(file_path, 'r', encoding='utf-8') as f:
#             content = f.read()
        
#         response = HttpResponse(content, content_type='text/markdown')
#         response['Content-Disposition'] = f'attachment; filename="{filename}"'
#         return response
        
#     except Exception as e:
#         return JsonResponse({
#             "error": f"Error downloading file: {str(e)}"
#         }, status=500)