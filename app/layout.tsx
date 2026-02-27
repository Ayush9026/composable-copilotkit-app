import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import "@copilotkit/react-ui/styles.css";
import { CopilotKit } from "@copilotkit/react-core";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'Composable CopilotKit: Modular Agent App',
  description: 'A full-stack modular agent application built with Next.js, CopilotKit, and LangGraph',
  keywords: ['AI', 'CopilotKit', 'LangGraph', 'Next.js', 'TypeScript', 'Agents', 'Modular'],
  authors: [{ name: 'CopilotKit Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CopilotKit
          runtimeUrl="/api/copilotkit"
          agent="researcher"
        >
          {children}
        </CopilotKit>
      </body>
    </html>
  )
}
