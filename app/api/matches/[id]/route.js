import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb'; 
import Match from '../../../../models/Match';

// GET: 특정 경기 상세 조회
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const match = await Match.findById(id);
    if (!match) {
      return NextResponse.json({ success: false, error: 'Match not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: match }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// DELETE: 특정 경기 삭제
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await dbConnect();
    const deletedMatch = await Match.findByIdAndDelete(id);
    if (!deletedMatch) {
      return NextResponse.json({ success: false, error: 'Match not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}