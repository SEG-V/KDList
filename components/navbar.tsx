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