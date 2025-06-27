import { createMcpHandler } from '@vercel/mcp-adapter';
import { z } from 'zod';

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
                text: `Error checking deployment status: ${error instanceof Error ? error.message : 'Unknown error'}`
              }
            ]
          };
        }
      }
    );
  },
  {
    // Add any global options here
  },
  { basePath: '/api' }
);

export default handler; 