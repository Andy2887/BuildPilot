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
               - Explain the role and responsibility of each file and folder
               - Detail how files will interact and depend on each other
               - Provide specific file naming conventions and organization patterns
               - Include configuration files, utility files, and helper modules
               - Explain architectural patterns and folder hierarchies
            
            2. **COMPREHENSIVE API DESIGN AND DOCUMENTATION** (Primary Focus):
               - Design and document EVERY API endpoint in detail
               - Specify HTTP methods, URL patterns, and route structures
               - Define request/response schemas and data models
               - Plan authentication and authorization mechanisms
               - Detail error handling and status code strategies
               - Include API versioning and rate limiting considerations
               - Plan database models and API data flow
            
            3. Supporting analysis sections:
               - Technology stack recommendations with specific versions
               - Project architecture overview and design patterns
               - Development phases and milestones
               - Estimated timeline with detailed breakdowns
               - Key features breakdown with implementation details
               - Potential challenges and specific solutions
               - Prerequisites and detailed setup requirements
            
            Make the project structure planning and API design sections extremely detailed and comprehensive.
            These should be the longest and most thorough parts of your analysis.
            
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
            
            3. **COMPREHENSIVE API DOCUMENTATION** (Primary Focus):
               - Document EVERY API endpoint
               - Include HTTP methods, URL paths, and parameters
               - Explain API versioning and rate limiting if applicable
            
            Make the project structure and API documentation sections extremely detailed. 
            These should be the longest and most informative parts of the README.
            
            Format it as a complete, professional README.md file with proper markdown formatting.
            
            IMPORTANT: Return only the markdown content without wrapping it in code blocks. 
            Do NOT use ```markdown or ``` tags to wrap the output. Return the raw markdown content directly.
            """),
            agent=agent,
            expected_output="A complete, professional README.md file with detailed project structure and API documentation as the main focus, in raw markdown format"
        )