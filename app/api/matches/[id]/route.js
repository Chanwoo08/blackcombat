import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb';
import Match from '@/models/Match';

export async function GET(request, { params }) {
  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) return NextResponse.json({ message: '잘못된 ID입니다.' }, { status: 400 });
  try { await connectDB(); const match = await Match.findById(id).populate('fighterIds').lean(); if (!match) return NextResponse.json({ message: '경기를 찾을 수 없습니다.' }, { status: 404 }); return NextResponse.json(match); }
  catch (error) { return NextResponse.json({ message: '서버 오류' }, { status: 500 }); }
}
