import React, { FC } from 'react'

import Navbar from '~/components/navbar.tsx'

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
    let user = {
      isGuest: true
    }

    return (
      <main>
        <head>
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="/style/style.css"/>
        </head>
        <Navbar brand="KDList" user={ user } />
        <Page { ...pageProps } />
      </main>
    )
}
