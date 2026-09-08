import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Match from '@/models/Match';

export async function GET() {
  try { await connectDB(); const matches = await Match.find().populate('fighterIds').lean(); return NextResponse.json(matches); }
  catch (error) { return NextResponse.json({ message: '서버 오류' }, { status: 500 }); }
}
