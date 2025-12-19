import { NextResponse } from 'next/server';
import { blogs } from './data';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(blogs);
}
