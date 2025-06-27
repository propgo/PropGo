import { createMcpHandler } from '@vercel/mcp-adapter';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const handler = createMcpHandler(
  (server) => {
    server.tool(
      'vercel_deploy_status',
      'Gets the current deployment status',
      {
        projectId: {
          type: 'string',
          optional: true,
          description: 'The ID of the project to check'
        }
      },
      async ({ projectId }: { projectId?: string }) => {
        try {
          return {
            content: [
              {
                type: 'text' as const,
                text: `Checking deployment status for project ${projectId || 'current'}...`
              }
            ]
          };
        } catch (error) {
          console.error('Error checking deployment status:', error);
          return {
            content: [
              {
                type: 'text' as const,
                text: 'Error checking deployment status'
              }
            ]
          };
        }
      }
    );
  },
  {},
  { basePath: '/api' }
);

export const GET = handler;
export const POST = handler;
export const DELETE = handler; 