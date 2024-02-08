/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: any }) {
  console.log(params)

  return Response.json({
    body: `chapters: ${params}`,
  });
}
