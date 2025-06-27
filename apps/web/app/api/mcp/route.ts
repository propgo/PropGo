import mcpHandler from '../../../mcp.config';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  return mcpHandler(request);
}

export async function POST(request: Request) {
  return mcpHandler(request);
}

export async function DELETE(request: Request) {
  return mcpHandler(request);
} 