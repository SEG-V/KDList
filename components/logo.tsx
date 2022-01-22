import React from 'react'

interface LogoProps {
	content: string;
	size: number; 
}

export default function Logo(props: LogoProps) {
	return (
		<>
			<div className="logo">
				<span style={{ fontSize: `${props.size}px` }}>{ props.content }</span>
			</div>
		</>
	)
}