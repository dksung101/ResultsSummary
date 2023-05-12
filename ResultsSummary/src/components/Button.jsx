import React from 'react'

const Button = () => {
  function consoleit() {
    console.log('continue');
  }
  return (
    <button className='btn btn-primary' onClick={consoleit}>Continue</button>
  )
}

export default Button