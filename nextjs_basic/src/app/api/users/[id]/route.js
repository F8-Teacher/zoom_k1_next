import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = await params;
  console.log(rest);
  return NextResponse.json({ id });
};
