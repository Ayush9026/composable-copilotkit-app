# 🧩 Composable CopilotKit App

A powerful, multi-agent AI workspace built with **Next.js**, **CopilotKit**, and **LangGraph**. This application demonstrates a sophisticated "Neural Node" architecture where specialized agents collaborate to solve complex reasoning and development tasks.

![Project Banner](https://img.shields.io/badge/AI-LangGraph-blueviolet?style=for-the-badge)
![Project Banner](https://img.shields.io/badge/Framework-Next.js%2014-black?style=for-the-badge)
![Project Banner](https://img.shields.io/badge/UI-CopilotKit-blue?style=for-the-badge)

## 🚀 Overview

The Composable CopilotKit App is designed as a unified interface for interacting with advanced AI agents. By leveraging **LangGraph** on the backend, the app manages complex state-driven agentic workflows, while **CopilotKit** provides a seamless, integrated chat experience within a modern, glassmorphic React frontend.

### 🧠 Core Neural Nodes

- **📝 Synthesizer**: Specialized in deep context extraction and information synthesis.
- **🧠 Reasoning Engine**: Handles multi-step inference and logical deduction.
- **⚙️ Dev Architect**: Expert in code synthesis, architecture design, and technical logic.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [CopilotKit](https://www.copilotkit.ai/)
- **Agent Orchestration**: [LangGraph](https://www.langchain.com/langgraph) (Python)
- **Backend API**: [FastAPI](https://fastapi.tiangolo.com/) & [LangServe](https://www.langchain.com/langserve)
- **LLMs**: OpenAI (GPT-4o mini) & Google Gemini

---

## ⚙️ Getting Started

### 1. Prerequisites

- **Node.js**: v18+ 
- **Python**: v3.10+
- **OpenAI API Key**
- **Google AI API Key** (for Gemini nodes)

### 2. Environment Variables

Create a `.env.local` file in the root directory and a `.env` file in the `agent/` directory.

#### Root `.env.local`
```env
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_api_key
LANGGRAPH_URL=http://127.0.0.1:8000/copilotkit
```

#### Agent `agent/.env`
```env
OPENAI_API_KEY=your_openai_api_key
GOOGLE_API_KEY=your_google_api_key
```

### 3. Installation & Setup

#### Frontend Setup
```bash
npm install
```

#### Backend (Agent) Setup
```bash
cd agent
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Running the Application

You can run both the frontend and the agent server simultaneously using a single command:

```bash
npm run dev:all
```

Alternatively, run them separately:

- **Frontend**: `npm run dev` (starts on `http://localhost:3000`)
- **Agent Server**: `npm run dev:agent` (starts on `http://localhost:8000`)

---

## 📂 Project Structure

```text
.
├── agent/                # Python LangGraph Backend
│   ├── agent.py          # Agent logic and graph definition
│   ├── server.py         # FastAPI/LangServe integration
│   └── requirements.txt  # Python dependencies
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Global layout
│   └── page.tsx          # Main Agent Workspace UI
├── components/           # React Components
│   └── LangGraphAgent.tsx # CopilotKit Runtime provider
├── public/               # Static assets
└── package.json          # Node.js dependencies and scripts
```

---

## 📖 Deep Dive

For a full walkthrough of how this app was built and the architecture behind the multi-agent system, check out my blog post:

👉 **[Read the Full Blog Post Here](your-blog-link-here)**

---

