/**
 * GET /api/v1/public/projects
 * Get public projects with filtering
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
    const {
      industry,
      tech,
      status,
      page = '1',
      limit = '10',
    } = req.query;

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    // Build filter
    const where: any = { isPublic: true };

    if (industry) {
      where.industry = industry;
    }

    if (status) {
      where.status = status;
    }

    if (tech) {
      where.techStack = { has: tech };
    }

    // Get projects and total count
    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          client: true,
          industry: true,
          techStack: true,
          status: true,
          featuredImage: true,
          startDate: true,
          endDate: true,
        },
      }),
      prisma.project.count({ where }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        projects,
        pagination: {
          total,
          page: pageNum,
          limit: limitNum,
          totalPages: Math.ceil(total / limitNum),
        },
      },
    });
  } catch (error) {
    console.error('Get projects error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}
