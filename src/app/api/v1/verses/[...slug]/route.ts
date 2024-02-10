/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';
import { NextRequest } from 'next/server';

/**
 * @swagger
 * /api/v1/verses/{book}/{chapter}/{verse}:
 *   get:
 *     description: Returns verse from the book chapter
 *     responses:
 *       200:
 *         description: Returns verse from the book chapter
 */
export async function GET(
  _: NextRequest,
  { params }: { params: { slug: string } }
) {
  return Response.json(
    await redis.hgetall(
      `books:${params.slug[0]}:${params.slug[1]}:${params.slug[2]}`
    )
  );
}
