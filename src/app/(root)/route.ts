import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { resolveInitialLocale } from "@/shared/i18n/initial-locale";

export const dynamic = "force-dynamic";

export const GET = (request: NextRequest): NextResponse => {
  const locale = resolveInitialLocale({
    acceptLanguage: request.headers.get("accept-language"),
    countryCode: request.headers.get("cf-ipcountry"),
  });
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}`;
  redirectUrl.search = "";

  const response = NextResponse.redirect(redirectUrl, 307);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "Accept-Language, CF-IPCountry");
  return response;
};
