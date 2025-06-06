from crewai import Crew, Process
from agents import CustomAgents
from tasks import CustomTasks
import os
from dotenv import load_dotenv

load_dotenv()

class ProjectPlanningAssistant:
    def __init__(self):
        self.agents = CustomAgents()
        self.tasks = CustomTasks()
    
    def generate_project_plan(self, project_name, project_description):
        # Create agents
        planner = self.agents.project_planner_agent()
        documenter = self.agents.documentation_agent()
        
        # Create tasks with project name included
        analysis_task = self.tasks.project_analysis_task(planner, project_name, project_description)
        readme_task = self.tasks.readme_generation_task(documenter, project_name, analysis_task.expected_output)
        
        # Create crew
        crew = Crew(
            agents=[planner, documenter],
            tasks=[analysis_task, readme_task],
            process=Process.sequential,
            verbose=True
        )
        
        # Execute and extract the result content
        crew_output = crew.kickoff()
        return str(crew_output)

def get_user_input():
    """Get project details from user input"""
    print("🤖 Welcome to AI Coding Assistant!")
    print("=" * 50)
    
    # Get project name
    while True:
        project_name = input("\n📝 Enter your project name: ").strip()
        if project_name:
            break
        print("❌ Project name cannot be empty. Please try again.")
    
    # Get project description
    print(f"\n📋 Now describe your project '{project_name}':")
    print("   (Type 'done' on a new line when finished)")
    
    description_lines = []
    
    while True:
        line = input()
        if line.lower() == 'done':
            break
        description_lines.append(line)
    
    project_description = "\n".join(description_lines).strip()
    
    if not project_description:
        print("❌ Project description cannot be empty.")
        return get_user_input()
    
    # Confirm details
    print("\n" + "="*50)
    print("📋 PROJECT SUMMARY")
    print("="*50)
    print(f"📝 Name: {project_name}")
    print(f"📄 Description:\n{project_description}")
    print("="*50)
    
    confirm = input("\n✅ Does this look correct? (y/n): ").lower().strip()
    if confirm in ['y', 'yes']:
        return project_name, project_description
    else:
        print("\n🔄 Let's try again...")
        return get_user_input()

def save_output(project_name, result):
    """Save the generated plan to a file"""
    try:
        filename = f"{project_name.replace(' ', '_').lower()}_plan.md"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(result)
        print(f"\n💾 Project plan saved to: {filename}")
        return filename
    except Exception as e:
        print(f"\n❌ Error saving file: {e}")
        return None

if __name__ == "__main__":
    try:
        # Check for API key
        if not os.getenv("OPENAI_API_KEY"):
            print("❌ Error: OPENAI_API_KEY not found in environment variables.")
            print("   Please create a .env file with your OpenAI API key.")
            exit(1)
        
        # Get user input
        project_name, project_description = get_user_input()
        
        # Generate plan
        print("\n🚀 Generating your project plan...")
        print("⏳ This may take a few minutes...")
        
        assistant = ProjectPlanningAssistant()
        result = assistant.generate_project_plan(project_name, project_description)
        
        # Display results
        print("\n" + "="*60)
        print("🎉 PROJECT PLAN GENERATED SUCCESSFULLY!")
        print("="*60)
        print(result)
        
        # Save to file
        saved_file = save_output(project_name, result)
        
        if saved_file:
            print(f"\n📁 You can find your README at: {saved_file}")
        
    except KeyboardInterrupt:
        print("\n\n👋 Goodbye! Project planning cancelled.")
    except Exception as e:
        print(f"\n❌ An error occurred: {e}")
        print("Please check your setup and try again.")