from crewai import Task
from textwrap import dedent

class CustomTasks:
    def project_analysis_task(self, agent, project_name, project_description):
        return Task(
            description=dedent(f"""
            Analyze the following project and create a comprehensive project plan:
            
            Project Name: {project_name}
            Project Description: {project_description}
            
            Your analysis should emphasize and provide detailed coverage of:
            
            1. **DETAILED PROJECT STRUCTURE PLANNING** (Primary Focus):
               - Design a comprehensive file and directory structure
               - Specify EVERY file that should be created with their exact purposes
               - Include configuration files, utility files, and helper modules
            
            2. API design:
               - Design and document EVERY API endpoint
               - Specify URL patterns and provide a brief explanation of what it does
               - Plan authentication and authorization mechanisms
            
            3. Supporting analysis sections:
               - Technology stack recommendations with specific versions
               - Project architecture overview and design patterns
               - Potential challenges and specific solutions
            
            IMPORTANT: Return only the plain text content without any markdown code block wrappers (no ```markdown or ``` tags).
            """),
            agent=agent,
            expected_output="A detailed project analysis with comprehensive project structure planning and API design as the main focus, in plain text format"
        )
    
    def readme_generation_task(self, agent, project_name, project_analysis):
        return Task(
            description=dedent(f"""
            Create a professional README.md file for the project "{project_name}":
            
            Based on this analysis: {project_analysis}
            
            The README should follow this structure and prioritize these sections:
            
            1. **Project Introduction** (First Section):
               - Project title: {project_name}
               - Comprehensive project description and overview
               - Technology stack and prerequisites
            
            2. **DETAILED PROJECT STRUCTURE** (Primary Focus):
               - List EVERY file and directory in the project
               - Include file paths and organization logic
               - Provide a comprehensive file tree structure
            
            3. API documentation:
               - Document EVERY API endpoint
               - Include URL paths and brief explanation
               - Explain API versioning and rate limiting if applicable
            
            Make the project structure section extremely detailed. 
            
            Format it as a complete, professional README.md file with proper markdown formatting.
            
            IMPORTANT: Return only the markdown content without wrapping it in code blocks. 
            Do NOT use ```markdown or ``` tags to wrap the output. Return the raw markdown content directly.
            """),
            agent=agent,
            expected_output="A complete, professional README.md file with detailed project structure as the main focus, in raw markdown format"
        )