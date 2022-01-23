import React, { FC } from 'react'

import Navbar from '~/components/navbar.tsx'
import Footer from '~/components/footer.tsx'

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
	let user = {
		isGuest: true,
	}

	return (
		<main>
			<head>
				<meta name="viewport" content="width=device-width" />
				<link rel="stylesheet" href="/style/style.css"/>
				<script src="https://kit.fontawesome.com/9eae8164b9.js" crossOrigin="anonymous"></script>
				<script>
					// set theme
					document.body.setAttribute(
						"data-theme",
						localStorage.getItem("theme") || "light"
					)
				</script>
			</head>
			<Navbar brand="KDList" user={ user } />
			<Page { ...pageProps } />
			<Footer />
		</main>
	)
}
