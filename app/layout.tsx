import type { ReactNode } from 'react'
import { CmsBridge } from '@bifrost-orbit-cms/sdk/next'

import { cms } from '@/lib/cms'

import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CmsBridge client={cms} />
      </body>
    </html>
  )
}
