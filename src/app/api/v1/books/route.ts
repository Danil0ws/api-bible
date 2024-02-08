/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';

export async function GET(request: Request) {
  await redis.set('book', 'bar');

  const book = await redis.get('book');

  return Response.json({
    body: `book: ${book}`,
  });
}
