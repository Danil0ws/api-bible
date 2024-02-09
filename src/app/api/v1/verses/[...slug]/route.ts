/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';
import { NextRequest } from 'next/server';

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
