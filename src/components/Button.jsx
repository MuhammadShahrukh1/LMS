import React from 'react'

const Button = ({bgcolor,  width, paddingX, paddingY, textSize, textColor, text}) => {
  const className = `bg-${bgcolor}-600 hover:bg-${bgcolor}-800 text-${textSize} py-${paddingY} px-${paddingX} text-${textColor}`
    return (
    <button className={className}>{text}</button>
  )
}

export default Button
