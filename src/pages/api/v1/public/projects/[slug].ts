/**
 * GET /api/v1/public/projects/[slug]
 * Get project by slug (public)
 * ME PROMPT TECHNOLOGY
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const { slug } = req.query;

    const project = await prisma.project.findUnique({
      where: {
        slug: slug as string,
        isPublic: true,
      },
      include: {
        projectMembers: {
          select: {
            id: true,
            role: true,
            members: {
              select: {
                id: true,
                name: true,
                position: true,
                photoUrl: true,
              },
            },
          },
        },
        projectInterns: {
          select: {
            id: true,
            role: true,
            interns: {
              select: {
                id: true,
                name: true,
                university: true,
                portfolioSlug: true,
                photoUrl: true,
              },
            },
          },
        },
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: { project },
    });
  } catch (error) {
    console.error('Get project error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}
