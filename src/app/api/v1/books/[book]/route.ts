/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';

export async function GET(_: Request, { params }: { params: any }) {
  const chapters = await redis.hgetall(`books:${params.book}`)
  if (!chapters) {
    return Response.json({ error: "Book not found" }, { status: 404 });
  }
  return Response.json({
    name: chapters.name,
    abbrev: chapters.abbrev,
    chapters: chapters.chapters
  });
}
