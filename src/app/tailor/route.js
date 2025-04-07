import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    { message : "SHRUTI PAAAGAL HAI, puri ki puri" },
    { status: 200 }
  );
  }
  