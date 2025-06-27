// Temporarily disabled MCP integration for deployment troubleshooting
// import { createMcpHandler } from '@vercel/mcp-adapter';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Simple fallback handlers for testing
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    message: 'MCP endpoint is temporarily disabled for deployment testing',
    status: 'ok'
  });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    message: 'MCP endpoint is temporarily disabled for deployment testing',
    status: 'ok'
  });
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json({ 
    message: 'MCP endpoint is temporarily disabled for deployment testing',
    status: 'ok'
  });
} 