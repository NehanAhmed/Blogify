import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-zinc-800',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <button className={`px-3 py-3 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button