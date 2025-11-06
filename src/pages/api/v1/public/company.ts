/**
 * GET /api/v1/public/company
 * Get company information (public)
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
    const company = await prisma.company.findFirst();

    if (!company) {
      return res.status(404).json({
        success: false,
        error: 'Company information not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: { company },
    });
  } catch (error) {
    console.error('Get company error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}
