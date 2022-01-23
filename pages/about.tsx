import React from 'react'

import Icon from '~/components/icon.tsx'

export default function About() {
	return (
		<div className="page padded-container">
			<Icon content="KDList" size={ 32 } />
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