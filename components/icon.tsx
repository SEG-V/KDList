import React from 'react'

interface LogoProps {
	content: string | JSX.Element;
	size: number;
}

export default function Icon(props: LogoProps) {
	return (
		<div className="logo">
			<span style={{ fontSize: `${props.size}px` }}>{ props.content }</span>
		</div>
	)
}