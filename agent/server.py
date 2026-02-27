import sys
import os

# Force UTF-8 encoding for stdout to prevent UnicodeEncodeError on Windows
if sys.platform == "win32":
    import codecs
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    else:
        sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langserve import add_routes
from agent import agent
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="LangGraph Agent Server",
    description="LangGraph agent for CopilotKit integration",
    version="1.0.0"
)

# Add logging middleware
@app.middleware("http")
async def log_requests(request, call_next):
    print(f"Request: {request.method} {request.url.path}")
    response = await call_next(request)
    print(f"Response: {response.status_code}")
    return response

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add LangServe routes for the agent
# This creates the /invoke, /stream, /batch endpoints
add_routes(
    app,
    agent,
    path="/copilotkit",
    enabled_endpoints=["invoke", "stream", "playground"],
)

@app.get("/")
async def root():
    return {
        "message": "LangGraph Agent Server",
        "status": "running",
        "agent": "langgraph_agent",
        "endpoints": {
            "invoke": "/copilotkit/invoke",
            "stream": "/copilotkit/stream",
            "playground": "/copilotkit/playground"
        }
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    print("Starting LangGraph Agent Server on http://127.0.0.1:8000")
    print("Playground available at http://127.0.0.1:8000/copilotkit/playground")
    uvicorn.run(app, host="127.0.0.1", port=8000)
