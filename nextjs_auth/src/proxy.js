import { NextResponse } from "next/server";
import { getCurrentUser, requestRefreshToken } from "./services/auth.service";
const protectUrls = ["/cart", "/orders", "/accounts"];
const guestUrls = ["/auth/login"];
export const proxy = async (request) => {
  const user = await getCurrentUser();
  const { pathname } = request.nextUrl;
  if (!user) {
    if (protectUrls.some((url) => pathname.includes(url))) {
      //Refresh token
      const refreshToken = request.cookies.get("refreshToken")?.value;
      const newToken = await requestRefreshToken(refreshToken);
      if (!newToken) {
        //Xử lý khi refresh thất bại
        const response = NextResponse.redirect(
          new URL("/auth/login", request.nextUrl.origin),
        );
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }
      //Xử lý khi refresh thành công
      const response = NextResponse.next();
      response.cookies.set("accessToken", newToken.accessToken, {
        httpOnly: true,
        maxAge: 3600,
      });
      response.cookies.set("refreshToken", newToken.refreshToken, {
        httpOnly: true,
        maxAge: 86400 * 7,
      });
      return response;
    }
  } else {
    if (guestUrls.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }
  }
};

export const config = {
  matcher: [
    // "/cart/:path*",
    // "/auth/:path*",
    // "/orders/:path*",
    // "/account/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};

//proxy -> set cookie (response header) -> layout -> page -> response (browser save cookie)
//Khi set cookie bằng response của proxy -> next tự động đính kèm cookie mới vào request header
