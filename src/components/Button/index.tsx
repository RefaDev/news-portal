import React from 'react'

interface IButtonParams {
   hadleChange: () => void
   title: string
}

const Button: React.FC<IButtonParams> = ({ hadleChange, title }) => {
   return <button onClick={hadleChange}>{title}</button>
}

export default Button
