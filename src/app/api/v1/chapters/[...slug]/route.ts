/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import redis from '@/services/redis';
import { NextRequest } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: { slug: string} }) {
  const chapter = await redis.hgetall(`books:${params.slug[0]}:${params.slug[1]}`)
  if (!chapter) {
    return Response.json({ error: "Chapter not found" }, { status: 404 });
  }
  return Response.json({
    name: chapter.name,
    number: chapter.number,
    lenght:  chapter.lenght,
    verses: chapter.verses
  });
}
