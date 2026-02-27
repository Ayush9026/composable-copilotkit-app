"""
LangGraph Agent for CopilotKit
Simple Q&A agent that properly integrates with CopilotKit
"""
from typing import TypedDict, Annotated
import operator
from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage, BaseMessage
import os

class AgentState(TypedDict):
    """State that gets passed between nodes"""
    messages: Annotated[list[BaseMessage], operator.add]

def agent_node(state: AgentState) -> AgentState:
    """
    Main agent node that processes user queries and returns responses
    """
    print("Running Agent Node")
    
    messages = state.get("messages", [])
    if not messages:
        return {"messages": []}
    
    # Choose LLM based on available environment variables
    # Default to Gemini if GOOGLE_API_KEY is present
    if os.getenv("GOOGLE_API_KEY"):
        print(f"DEBUG: GOOGLE_API_KEY found (length: {len(os.getenv('GOOGLE_API_KEY'))})")
        print("Using Google Gemini LLM (gemini-pro)")
        llm = ChatGoogleGenerativeAI(
            model="gemini-pro",
            temperature=0.7,
            max_output_tokens=500
        )
    else:
        print("Using OpenAI LLM")
        llm = ChatOpenAI(
            model="gpt-4o-mini",
            temperature=0.7,
            max_tokens=500
        )
    
    # Add system message for context
    system_msg = SystemMessage(
        content="You are a helpful AI assistant. Provide clear, accurate, and comprehensive answers to user questions."
    )
    
    # Combine system message with conversation history
    # Start with system message
    llm_messages = [{"role": "system", "content": system_msg.content}]
    
    # Add conversation history with correct roles
    for m in messages:
        if isinstance(m, dict):
            content = m.get("content", "")
            m_type = m.get("type", "human")
            role = "user" if m_type == "human" else "assistant"
            llm_messages.append({"role": role, "content": content})
        elif hasattr(m, "content"):
            role = "user" if getattr(m, "type", "human") == "human" else "assistant"
            llm_messages.append({"role": role, "content": m.content})

    try:
        # Get response from LLM
        print(f"DEBUG: Invoking LLM with {len(llm_messages)} messages")
        response = llm.invoke(llm_messages)
        print(f"Agent Response: {response.content[:100]}...")
        # Return the AI response as a new message to be added to state
        return {"messages": [response]}
    except Exception as e:
        print(f"Error in Agent Node: {str(e)}")
        error_msg = AIMessage(content=f"Sorry, I encountered an error: {str(e)}")
        return {"messages": [error_msg]}

# Build the LangGraph workflow
workflow = StateGraph(AgentState)

# Add the single agent node
workflow.add_node("agent", agent_node)

# Define the flow: start -> agent -> end
workflow.set_entry_point("agent")
workflow.add_edge("agent", END)

# Compile the graph
agent = workflow.compile()
print("LangGraph agent compiled successfully!")
