/* KDlist: An online K-Drama database/tracking service.
 * Copyright (C) 2022  Saad Kondvilkar
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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
