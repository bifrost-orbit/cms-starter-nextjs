'use client'

import type { CmsPage as CmsPageData } from '@bifrost-orbit-cms/sdk'
import { CmsLivePage } from '@bifrost-orbit-cms/sdk/react'

import { registry } from '@/cms/registry'

export function LivePage({ page }: { page: CmsPageData }) {
  return <CmsLivePage page={page} registry={registry} />
}
