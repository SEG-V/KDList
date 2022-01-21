import React from 'react'

interface LogoProps {
    content: string;
}

export default function Logo(props: LogoProps) {
    return (
        <>
            <div className="logo">
                <span>{ props.content }</span>
            </div>
        </>
    )
}