import React from 'react'

const Input = ({placeholder ,type}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className='border outline-none p-2 w-full' />
    </div>
  )
}

export default Input