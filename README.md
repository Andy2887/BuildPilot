# BuildPilot 🚧

An AI-powered project planning assistant that helps developers analyze project requirements, recommend technology stacks, and generate comprehensive project documentation using intelligent AI agents.

## 🎯 Overview

BuildPilot leverages the power of CrewAI and OpenAI to provide automated project planning and documentation services. It uses specialized AI agents to analyze your project ideas and generate detailed project plans, including technology recommendations, development timelines, and professional README documentation.

### Key Features

- **Intelligent Project Analysis**: AI-powered analysis of project requirements and scope
- **Technology Stack Recommendations**: Get suggestions for the best tools and frameworks for your project
- **Automated Documentation**: Generate professional README files and project documentation
- **Development Timeline**: Receive realistic timeline estimates and milestone planning
- **Architecture Planning**: Get comprehensive project structure and architecture recommendations

## 🏗️ Architecture

BuildPilot uses a multi-agent system powered by CrewAI:

- **Project Planner Agent**: A senior software architect that analyzes requirements and creates comprehensive project plans
- **Documentation Agent**: A technical writing specialist that generates clear, professional documentation

## 🛠️ Technology Stack

### Backend
- **Python 3.12+**
- **Django**: Web framework for the REST API
- **Django REST Framework**: API development toolkit
- **CrewAI**: Multi-agent AI framework
- **LangChain**: AI application development framework
- **OpenAI API**: GPT-4 language model integration
- **python-dotenv**: Environment variable management

### Frontend
- **React/Next.js**: Modern web interface (planned)
- **Markdown Preview**: Real-time markdown rendering
- **File Export**: PDF, TXT, and MD download options
- **Responsive Design**: Mobile-friendly interface

## 📋 Prerequisites

- Python 3.12 or higher
- OpenAI API key
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "AI Agent Project"
   ```

2. **Set up Python virtual environment**
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your OpenAI API key and Django secret key
   # OPENAI_API_KEY=your_api_key_here
   # DJANGO_SECRET_KEY=your_django_secret_key_here
   ```

## 💻 Running the Application

### CLI Version
```bash
cd backend
python main.py
```

### Django REST API Server
```bash
cd backend
source .venv/bin/activate  # Make sure virtual environment is activated
python manage.py runserver # Start the Django development server
```

The API server will be available at `http://localhost:8000`

## 🖥️ Frontend Features (Planned)

The BuildPilot frontend will provide a user-friendly web interface with the following key features:

### 1. **Home Page** (`/`)
- Clean, modern landing page design
- **Contact Section**: 
  - Author's email address
  - LinkedIn profile link
- Navigation to other sections of the application

### 2. **About Page** (`/about`)
- Comprehensive explanation of BuildPilot's purpose and capabilities
- Overview of AI-powered project planning features
- Technology stack information
- Use cases and benefits

### 3. **Project Generator Interface** (`/generator`)
- **Input Form**:
  - Project name field
  - Project description textarea
  - Form validation and error handling
- **Loading State**:
  - Animated spinner during plan generation
  - Progress indicators
  - Estimated time remaining
- **Results Display**:
  - **Markdown Preview**: Real-time rendered preview of the generated plan
  - **Export Options**: Download buttons for multiple formats:
    - **PDF**: Professional document format
    - **TXT**: Plain text version
    - **MD**: Markdown source file
- **Responsive Design**: Mobile-friendly interface for all devices

### 4. **User Experience Features**
- **Real-time Preview**: Instant markdown rendering with syntax highlighting
- **Copy to Clipboard**: Quick copy functionality for generated content
- **Print Support**: Browser-friendly printing of generated plans
- **Accessibility**: WCAG compliant design for screen readers and keyboard navigation

## 🌐 API Endpoints

BuildPilot provides a REST API for integration with other applications:

### Health Check
- **Endpoint**: `GET /api/health/`
- **Description**: Check if the API server is running
- **Response**:
  ```json
  {
    "status": "healthy",
    "message": "BuildPilot AI backend is running"
  }
  ```

### Generate Project Plan
- **Endpoint**: `POST /api/generate-plan/`
- **Description**: Generate a comprehensive project plan using AI
- **Request Body**:
  ```json
  {
    "project_name": "My Awesome App",
    "project_description": "A web application for task management with user authentication and real-time updates."
  }
  ```
- **Response**:
  ```json
  {
    "message": "success",
    "plan": "# My Awesome App\n\n## Project Overview\n..."
  }
  ```

### API Usage Examples

**Using cURL:**
```bash
# Health check
curl http://localhost:8000/api/health/

# Generate project plan
curl -X POST http://localhost:8000/api/generate-plan/ \
  -H "Content-Type: application/json" \
  -d '{
    "project_name": "E-commerce Platform",
    "project_description": "A full-stack e-commerce solution with product catalog, shopping cart, payment processing, and admin dashboard."
  }'
```

**Using Python requests:**
```python
import requests

# Generate project plan
response = requests.post('http://localhost:8000/api/generate-plan/', json={
    'project_name': 'Social Media App',
    'project_description': 'A social networking platform with user profiles, posts, messaging, and content feeds.'
})

if response.status_code == 200:
    data = response.json()
    print("Plan generated successfully!")
    print(data['plan'])
else:
    print("Error:", response.json())
```

## 📁 Project Structure

```
BuildPilot/
├── README.md
├── backend/
│   ├── .env                    # Environment variables (create from .env.example)
│   ├── .env.example           # Environment variables template
│   ├── db.sqlite3             # SQLite database (created after migrations)
│   ├── manage.py              # Django management script
│   ├── run_server.py          # Custom server runner script
│   ├── agents.py              # AI agent definitions
│   ├── main.py                # CLI application entry point
│   ├── requirements.txt       # Python dependencies
│   ├── tasks.py               # Task definitions for agents
│   ├── generated_plans/       # Directory for generated project plans (removed)
│   ├── buildpilot_api/        # Django project directory
│   │   ├── __init__.py
│   │   ├── settings.py        # Django settings
│   │   ├── urls.py            # Main URL routing
│   │   ├── wsgi.py            # WSGI configuration
│   │   └── asgi.py            # ASGI configuration
│   └── project_api/           # Django app for API endpoints
│       ├── __init__.py
│       ├── admin.py           # Django admin configuration
│       ├── ai_service.py      # AI service wrapper for Django
│       ├── apps.py            # App configuration
│       ├── models.py          # Database models (empty for now)
│       ├── tests.py           # Unit tests
│       ├── urls.py            # API URL patterns
│       └── views.py           # API view functions
└── frontend/                  # Frontend web interface
    ├── pages/
    │   ├── index.js           # Home page with contact information
    │   ├── about.js           # About page explaining the program
    │   └── generator.js       # Main interface for project plan generation
    ├── components/
    │   ├── ProjectForm.js     # Form for project input
    │   ├── LoadingSpinner.js  # Loading animation during generation
    │   ├── MarkdownPreview.js # Markdown preview component
    │   └── ExportOptions.js   # PDF/TXT/MD download options
    └── styles/                # CSS styling files
```

## 🔧 Configuration

Create a `.env` file in the `backend` directory with the following variables:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Django Configuration  
DJANGO_SECRET_KEY=your_django_secret_key_here
```

**How to get these keys:**

1. **OpenAI API Key**: 
   - Sign up at [OpenAI](https://platform.openai.com/)
   - Go to API Keys section and create a new key

2. **Django Secret Key**:
   ```bash
   python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
   ```

## 🤖 AI Agents

### Project Planner Agent
- **Role**: Senior Software Project Planner
- **Expertise**: 15+ years of software architecture experience
- **Capabilities**: Technology stack recommendations, timeline estimation, development phase planning

### Documentation Agent
- **Role**: Technical Documentation Specialist
- **Expertise**: Creating clear, comprehensive documentation
- **Capabilities**: README generation, API documentation, project structure documentation

## 🚧 Development Status

This project is currently in active development. Here's what's implemented and what's planned:

### ✅ Completed
- Core AI agent system using CrewAI
- Project analysis capabilities
- Documentation generation
- Basic CLI interface
- Django REST API backend
- Health check and project generation endpoints
- Automatic markdown plan generation (file download removed)

### 🔄 In Progress
- Enhanced project analysis algorithms
- Improved documentation templates
- Error handling and validation
- API rate limiting and authentication

### 📅 Planned
- **Frontend Web Interface**:
  - **Home Page**: Landing page with contact information (author's email and LinkedIn)
  - **About Page**: Detailed explanation of BuildPilot's capabilities and purpose
  - **Generator Interface**: Interactive form for project name and description input
  - **Loading States**: Smooth loading animations during plan generation
  - **Markdown Preview**: Real-time preview of generated project plans
  - **Export Options**: Download generated plans as PDF, TXT, or MD files
- API authentication and user management
- Database integration for project history
- Additional specialized agents (testing, deployment, security)
- Plugin system for custom agents
- Project template library

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page for known problems
2. Create a new issue if your problem isn't listed
3. Provide detailed information about your environment and the issue

## 🔮 Future Vision

BuildPilot aims to become a comprehensive AI-powered development assistant that can:

- Generate complete project boilerplates
- Provide real-time development guidance
- Automate testing and deployment strategies
- Offer intelligent code review and suggestions
- Integrate with popular development tools and platforms

---

**Note**: This project is under active development. Features, APIs, and documentation may change as the project evolves.
