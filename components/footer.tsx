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

interface FooterProps {
}

export default function Footer(props: FooterProps) {
	return (
		<footer>
			<p style={{ fontSize: "0.8rem" }}>Copyright <span style={{ fontSize: "1.2rem" }}>&copy;</span> 2022 Saad Kondvilkar. All Rights Reserved.</p>
			<p style={{ fontSize: "0.8rem" }}>(GNU AGPLv3 License)</p>
		</footer>
	)
}