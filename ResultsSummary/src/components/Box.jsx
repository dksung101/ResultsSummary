import React from 'react'
import '../index.css'

const Box = ({children}) => {
  return (
    <div className='box-component'>
        {children}
    </div>
  )
}

export default Box