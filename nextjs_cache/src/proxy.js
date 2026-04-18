import { NextResponse } from "next/server";
import { refreshToken } from "./app/utils/utils";
import { cookies } from "next/headers";
const isAuth = true;
export const proxy = async (request) => {
  if (!isAuth) {
    return NextResponse.redirect(new URL("/", request.nextUrl.origin));
  }
  //   const pathname = request.nextUrl.pathname;
  //   console.log(`proxy:`, pathname);
  //   console.log(request.nextUrl);
  //   const host = request.headers.get("host");
  //   console.log(host);
  //   const allHeaders = request.headers;
  //   allHeaders.set("x-token", "abc123");
  //   const name = request.cookies.get("name");
  //   console.log(name);

  //   response.headers.set("x-abc", "ahihi");
  //   response.cookies.set("token", "abc11111", {
  //     httpOnly: true,
  //   });
  //   response.cookies.delete("token");
  // response.cookies.set("token", "123", {
  //   httpOnly: true,
  // });

  //Check profile --> 401
  const newToken = await refreshToken();
  const allHeaders = request.headers;
  allHeaders.set("x-token", newToken);
  const response = NextResponse.next({
    request: {
      headers: allHeaders,
    },
  });
};

export const config = {
  matcher: ["/posts/:path*", "/todos/:path*"],
};

//cookie: set, get, delete,...
//http header
//url
