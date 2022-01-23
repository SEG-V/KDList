import React from 'react'

interface FooterProps {
}

export default function Footer(props: FooterProps) {
	function getCurrentYear(): number {
		return new Date().getFullYear()
	}

	return (
		<footer>
			<p style={{ fontSize: "0.8rem" }}>Copyright <span style={{ fontSize: "1.2rem" }}>&copy;</span> { getCurrentYear() } SEG-V. All Rights Reserved.</p>
		</footer>
	)
}