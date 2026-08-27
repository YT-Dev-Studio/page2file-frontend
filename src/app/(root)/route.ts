import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = (request: NextRequest): NextResponse => {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/en";
  redirectUrl.search = "";

  return NextResponse.redirect(redirectUrl, 308);
};
