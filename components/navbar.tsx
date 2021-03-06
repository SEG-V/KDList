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

import React from 'react'

import Logo from '~/components/logo.tsx'
import { User } from '~/lib/interfaces.ts'

interface NavbarProps {
	brand: string;
	user: User
}

export default function Navbar(props: NavbarProps) {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Logo content={ props.brand } size={ 21 } />
			</div>
			<ul>
				<li className="navbar-item">
					<a className="navbar-link" href="/">Home</a>
				</li>
				<li className="navbar-item">
					<a className="navbar-link" href="/about">About</a>
				</li>
				{
					props.user.isGuest ? <li className="navbar-item">
						<a className="navbar-link" href="/login">Login</a>
					</li> : <></>
				}
			</ul>
		</nav>
	)
}