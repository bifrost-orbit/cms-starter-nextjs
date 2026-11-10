# CMS Orbit starter for Next.js

A Next.js website that reads its pages from [CMS Orbit](https://bifrostorbit.com/products/cms-orbit/), the headless CMS in Bifröst Orbit. It is the finished project from the [Next.js quickstart](https://docs.bifrostorbit.com/cms/developers/quickstart-nextjs/): every published page at its own address, your own React components for the blocks editors place, drafts in the live preview as editors type, and a refresh when editors publish.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbifrost-orbit%2Fcms-starter-nextjs&env=CMS_API_URL,CMS_PUBLIC_KEY,CMS_DEFAULT_REGION&envDescription=The%20API%20address%2C%20public%20key%20and%20region%20from%20CMS%20Orbit&envLink=https%3A%2F%2Fdocs.bifrostorbit.com%2Fcms%2Fdevelopers%2Fquickstart-nextjs%2F&project-name=website&repository-name=website)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/bifrost-orbit/cms-starter-nextjs?quickstart=1)

The Vercel button asks for `CMS_API_URL`, `CMS_PUBLIC_KEY` and `CMS_DEFAULT_REGION`. Add `CMS_PREVIEW_KEY` for previews and `CMS_WEBHOOK_SECRET` for refresh on publish in the project's settings afterwards.

## Set up

1. **Create your copy.** Select **Use this template** on GitHub, or run `gh repo create my-website --template bifrost-orbit/cms-starter-nextjs --private --clone`.
2. **Add your settings.** Copy `.env.example` to `.env.local` and fill in the API address, keys and region from **Configuration › API keys** and **Configuration › Environments** in CMS Orbit.
3. **Run it.** Run `npm install`, then `npm run dev`, and open `http://localhost:3000`.

## What's inside

| File | What it does |
| --- | --- |
| `lib/cms.ts` | The CMS Orbit client, cached for 60 seconds with cache tags |
| `app/[[...slug]]/page.tsx` | One route for every page: redirects, not found, title and description |
| `cms/registry.tsx` | Which React component draws which CMS component |
| `components/blocks/` | The components: `hero`, `action`, `featureGrid` and `featureItem` |
| `proxy.ts`, `app/api/preview/` | Drafts in the editor's live preview |
| `app/api/revalidate/route.ts` | The signed webhook that refreshes pages when editors publish |

## Make it yours

- Run `npm run cms:types` to write your space's components to `cms/types.ts`.
- Draw your components in `components/blocks/` and register them in `cms/registry.tsx`, using the component keys from your own space.
- For the live preview, set **Preview URL** in the space's **Settings**. For refresh on publish, add a webhook to `https://your-website/api/revalidate` and put its secret in `CMS_WEBHOOK_SECRET`. The [quickstart](https://docs.bifrostorbit.com/cms/developers/quickstart-nextjs/) explains both.

Needs Node.js 20 or later and `@bifrost-orbit-cms/sdk` 0.12.

## Licence

MIT. See [LICENSE](LICENSE).
