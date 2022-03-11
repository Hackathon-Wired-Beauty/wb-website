import React from 'react'

interface Props{
    className?: string;
    width?: string;
    height?: string;
    maxWidth?: string;
    primary?: string;
    border?: string;
    margin?: string;
}

export const NavButton:React.FC <Props> = ({className, children}) =>
{
    return (
        <div className={className}>{children}</div>
    )
}