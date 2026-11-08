import type { CmsPage as CmsPageData } from '@bifrost-orbit-cms/sdk'
import { CmsPage } from '@bifrost-orbit-cms/sdk/react'

import { registry } from '@/cms/registry'

import { LivePage } from './live-page'

export function PageBody({ page }: { page: CmsPageData }) {
  if (page.draft) return <LivePage page={page} />
  return <CmsPage page={page} registry={registry} />
}
