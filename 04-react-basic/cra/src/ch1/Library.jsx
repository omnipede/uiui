import React from 'react'
import Book from './Book'

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 python" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
    </div>
  )
}

export default Library