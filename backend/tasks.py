from crewai import Task
from textwrap import dedent

class CustomTasks:
    def project_analysis_task(self, agent, project_name, project_description):
        return Task(
            description=dedent(f"""
            Analyze the following project and create a comprehensive project plan:
            
            Project Name: {project_name}
            Project Description: {project_description}
            
            Your analysis should include:
            1. Technology stack recommendations
            2. Project architecture overview
            3. Development phases and milestones
            4. Estimated timeline
            5. Key features breakdown
            6. Potential challenges and solutions
            7. Prerequisites and setup requirements
            """),
            agent=agent,
            expected_output="A detailed project analysis with recommendations and timeline"
        )
    
    def readme_generation_task(self, agent, project_name, project_analysis):
        return Task(
            description=dedent(f"""
            Create a professional README.md file for the project "{project_name}":
            
            Based on this analysis: {project_analysis}
            
            The README should include:
            1. Project title: {project_name}
            2. Clear project description and overview
            3. Technology stack and prerequisites
            4. Installation and setup instructions
            5. Usage examples and getting started guide
            6. Project structure explanation
            7. API documentation (if applicable)
            8. Contributing guidelines
            9. License information
            10. Contact/support information
            
            Format it as a complete, professional README.md file with proper markdown formatting.
            """),
            agent=agent,
            expected_output="A complete, professional README.md file in markdown format"
        )