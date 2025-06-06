from crewai import Agent
from textwrap import dedent
from langchain_openai import ChatOpenAI

class CustomAgents:
    def __init__(self):
        self.OpenAIGPT = ChatOpenAI(model_name="o3-mini", temperature=0.7)

    def project_planner_agent(self):
        return Agent(
            role="Senior Software Project Planner",
            backstory=dedent("""You are an experienced software architect with 15+ years 
            of experience in planning and structuring software projects across various domains."""),
            goal=dedent("""Analyze project requirements and create comprehensive project plans 
            including technology stack recommendations, timeline estimates, and development phases."""),
            allow_delegation=False,
            verbose=True,
            llm=self.OpenAIGPT,
        )

    def documentation_agent(self):
        return Agent(
            role="Technical Documentation Specialist",
            backstory=dedent("""You are a technical writer who specializes in creating 
            clear, comprehensive documentation for software projects."""),
            goal=dedent("""Generate professional README files, API documentation, 
            and project structure documentation that helps developers understand and contribute to projects."""),
            allow_delegation=False,
            verbose=True,
            llm=self.OpenAIGPT,
        )