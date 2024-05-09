import React from 'react'

const Title = ({locked}) => {
  return (
   <h1 className='title'>{locked ? <span>Limit! <b>Buy</b> Pro for &gt;</span> : "Fancy counter"}</h1>
  )
}

export default Title