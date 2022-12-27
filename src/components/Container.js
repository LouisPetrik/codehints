import React from 'react'

export default function Container(props) {
  return (
    <div className='container'>
      <div className='row'>{props.children}</div>
    </div>
  )
}
