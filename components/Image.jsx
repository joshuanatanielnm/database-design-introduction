import React from 'react'

export default function image(props) {
  const { view } = props;
  return (
    <div>
      <img src={`https://drive.google.com/uc?export=view&id=${view}`} alt=""/>
    </div>
  )
}
