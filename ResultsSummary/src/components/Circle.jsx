import React from 'react'

const Circle = ({average}) => {
  return (
    <div className='circle'><span>{average}</span><span className='of100'>of 100</span></div>
    )
}

export default Circle