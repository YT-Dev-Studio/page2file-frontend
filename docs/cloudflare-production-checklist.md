# Cloudflare Workers production checklist

The application target is Cloudflare Workers through OpenNext. Do not migrate
this project to Cloudflare Pages.

## Before the production build

- Copy the reviewed values from `.env.production.example` into the protected
  production build environment.
- Keep `NEXT_PUBLIC_SITE_URL=https://page2file.com`. This exact production
  hostname enables indexing automatically; public pages do not use an
  indexing feature flag.
- Privacy and Terms are indexable whenever they are published. Complete their
  owner review before deploying the content.
- Set the real extension, GPT and backend URLs. Do not publish placeholder
  catalog or store links.
- Store `PAGE2FILE_WEB_HMAC_SECRET` with `wrangler secret put`; never commit it
  or expose it as a `NEXT_PUBLIC_` variable.

## Worker and domain settings

- Deploy the OpenNext Worker and attach the Custom Domain `page2file.com`.
- Redirect `https://www.page2file.com/*` to
  `https://page2file.com/$1` with status 308 in a Cloudflare Redirect Rule.
- Disable the public `workers.dev` route when practical. If it must remain
  enabled, add a response-header rule for that hostname:
  `X-Robots-Tag: noindex, nofollow`.
- Keep the application-generated `/robots.txt`. Cloudflare Managed robots.txt
  must not replace it.
- Confirm Cloudflare Images is available to the `IMAGES` binding before
  enabling production traffic.

## Crawlers and security

- Do not challenge or block verified Googlebot, Bingbot or OAI-SearchBot in
  WAF, Bot Management or AI Crawl Control.
- Keep GPTBot blocked by the application robots policy. OAI-SearchBot remains
  allowed for AI-powered search.
- Exclude `/api/*`, `/*/preview/*` and `/*/download/*` from indexing. Preview
  and download responses must retain `private, no-store` and
  `X-Robots-Tag: noindex, nofollow`.

## Release verification

Run these commands before uploading a Worker version:

```text
npm run verify:release
npx opennextjs-cloudflare preview
npx wrangler deploy --dry-run
```

With the local Worker preview running, execute:

```text
SEO_BASE_URL=http://127.0.0.1:8787 npm run validate:seo
```

Check `/robots.txt`, `/sitemap.xml`, `/llms.txt`,
`/manifest.webmanifest`, the 192 and 512 pixel icons, and the 1200×630 social
image. After deployment, submit the sitemap to Google Search Console and Bing
Webmaster Tools and monitor crawler responses, 404s and Core Web Vitals.
