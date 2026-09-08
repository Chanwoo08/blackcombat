import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import Fighter from "../../../models/Fighter";

export async function GET() {
  try {
    await connectMongoDB();

    const fighters = await Fighter.find().sort({ createdAt: -1 });

    return NextResponse.json(fighters);
  } catch (error) {
    console.error("선수 목록 조회 오류:", error);

    return NextResponse.json(
      { message: "선수 정보를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}