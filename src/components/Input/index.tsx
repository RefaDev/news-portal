import React from 'react'

interface IInputParams {
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   placeholder?: string
}

const Input: React.FC<IInputParams> = ({ onChange, placeholder }) => {
   return <input type='text' onChange={onChange} placeholder={placeholder} />
}

export default Input
