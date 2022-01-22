import React from 'react'

import Logo from '~/components/logo.tsx'

export default function About() {
	return (
		<div className="padded-container">
			<Logo content="KDList" size={ 32 } />
			<p><a href="/">KDList</a> is an online K-drama database/tracking service. Users can track and share their K-drama experience.</p>
		</div>
	)
}