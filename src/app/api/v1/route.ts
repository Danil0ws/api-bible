/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';

export async function GET(_: Request) {
  const books = await redis.get(`books`)
  if (!books) {
    return Response.json({ error: "Books not found" }, { status: 404 });
  }
  return Response.json(books);
}
