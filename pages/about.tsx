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

export default function About() {
	return (
		<div className="page padded-container">
			<Logo content="KDList" size={ 32 } />
			<p><a href="/">KDList</a> is an online K-drama database/tracking service. Users can track and share their K-drama experience.</p>
			<h1>Contact Us</h1>
			<ul style={{ listStyleType: "none" }}>
				<li><i className="fab fa-discord"></i> <a href="https://discord.gg/aYBJYJ3cGq">Discord server.</a></li>
				<li><i className="fab fa-discord"></i> <a>SEG-V#5425</a></li>
			</ul>
			<h1>Other Links</h1>
			<ul style={{ listStyleType: "none" }}>
				<li><i className="fab fa-github"></i> <a href="https://github.com/SEG-V/KDList">Github repository.</a></li>
			</ul>
		</div>
	)
}