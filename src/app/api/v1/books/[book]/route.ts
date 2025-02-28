/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';

/**
 * @swagger
 * /api/v1/books/{book}:
 *   get:
 *     description: Returns all chapters of the book
 *     responses:
 *       200:
 *         description: Returns all chapters of the book
 */
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
