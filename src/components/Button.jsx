import React from "react"
const Button = ({ onClick, children, className = '', color = 'bg-second', ...props }) => {
    return (
        <button onClick={onClick} className={`${color} font-montserrat text-h3 rounded-2xl 
        text-primary hover:bg-black p-3 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button