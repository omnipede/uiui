import React from 'react'

function Book(props) {
  return (
    <div>
      <h1>{`Name: ${props.name}`}</h1>
      <h2>{`Num pages: ${props.numOfPage}`}</h2>
    </div>
  )
}

export default Book;
