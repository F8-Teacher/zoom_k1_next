//các hàm tương ứng với các HTTP METHOD: GET, POST, PUT, PATCH, DELETE

import { NextResponse } from "next/server";

//Response: NextResponse
export const GET = (request) => {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get("q");
  const apiKey = request.headers.get("x-api-key");
  return NextResponse.json(
    {
      message: "Success",
      q,
    },
    {
      //   status: 404,
    },
  );
};

export const POST = async (request) => {
  const body = await request.json(); //Lấy body
  return NextResponse.json({ body });
};
