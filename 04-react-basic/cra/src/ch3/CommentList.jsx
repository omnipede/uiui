import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: '1',
    comment: 'hello world'
  },
  {
    name: '2',
    comment: 'HELLO WORLD!'
  }
]


function CommentList(props) {
  return (
    <div>
      {
        comments.map((comment) => {
          return (
            <Comment name={comment.name} comment={comment.comment}/>
          )
        })
      }
    </div>
  )
}

export default CommentList