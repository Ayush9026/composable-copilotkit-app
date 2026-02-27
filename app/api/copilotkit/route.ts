import {
    CopilotRuntime,
    copilotRuntimeNextJSAppRouterEndpoint,
    EmptyAdapter,
} from "@copilotkit/runtime";
import { LangGraphHttpAgent } from "@copilotkit/runtime/langgraph";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const runtime = new CopilotRuntime({
    agents: {
        researcher: new LangGraphHttpAgent({
            url: process.env.LANGGRAPH_URL || "http://127.0.0.1:8000/copilotkit",
        }),
    },
});

const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new EmptyAdapter(),
    endpoint: "/api/copilotkit",
});

export const GET = handleRequest;
export const POST = handleRequest;
