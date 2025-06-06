import os
import sys
import re
from pathlib import Path
from django.conf import settings
from crewai import Crew, Process

# Add the backend directory to Python path
backend_dir = Path(__file__).resolve().parent.parent
sys.path.append(str(backend_dir))

from agents import CustomAgents
from tasks import CustomTasks

class ProjectPlanningService:
    def __init__(self):
        self.agents = CustomAgents()
        self.tasks = CustomTasks()
    
    def clean_markdown_response(self, content):
        """Clean up the AI response by removing markdown code block wrappers"""
        content = str(content).strip()
        
        # Remove markdown code block wrapper if present
        markdown_pattern = r'^```(?:markdown)?\s*\n(.*?)\n```$'
        match = re.match(markdown_pattern, content, re.DOTALL)
        if match:
            content = match.group(1).strip()
        
        # Also handle cases where there might be extra backticks at start/end
        content = re.sub(r'^`{3,}(?:markdown)?\s*\n?', '', content)
        content = re.sub(r'\n?`{3,}$', '', content)
        
        return content.strip()
    
    def generate_project_plan(self, project_name, project_description):
        """Generate project plan using AI agents"""
        try:
            # Create agents
            planner = self.agents.project_planner_agent()
            documenter = self.agents.documentation_agent()
            
            # Create tasks
            analysis_task = self.tasks.project_analysis_task(
                planner, project_name, project_description
            )
            readme_task = self.tasks.readme_generation_task(
                documenter, project_name, analysis_task.expected_output
            )
            
            # Create crew
            crew = Crew(
                agents=[planner, documenter],
                tasks=[analysis_task, readme_task],
                process=Process.sequential,
                verbose=False  # Set to False for API usage
            )
            
            # Execute and clean the result
            crew_output = crew.kickoff()
            cleaned_output = self.clean_markdown_response(crew_output)
            return cleaned_output
            
        except Exception as e:
            raise Exception(f"Error generating project plan: {str(e)}")
    
    # def save_plan_to_file(self, project_name, plan_content):
    #     """Save the generated plan to a markdown file"""
    #     try:
    #         filename = f"{project_name.replace(' ', '_').lower()}_plan.md"
    #         file_path = settings.GENERATED_PLANS_DIR / filename
            
    #         with open(file_path, 'w', encoding='utf-8') as f:
    #             f.write(plan_content)
            
    #         return str(file_path)
    #     except Exception as e:
    #         raise Exception(f"Error saving plan to file: {str(e)}")