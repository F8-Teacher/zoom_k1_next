import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { name, value, ttl } = await request.json();
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    httpOnly: true,
    maxAge: ttl,
  });
  return NextResponse.json({
    success: true,
  });
};

export const GET = async (request) => {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get("name");
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(name)?.value;
  return NextResponse.json({
    success: true,
    data: cookieValue,
  });
};
