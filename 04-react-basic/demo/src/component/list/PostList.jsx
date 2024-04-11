import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    & > * {
        :not(:last-child) {
            margin-bottom: 16px
        }
    }
`;

function PostList(props) {
  const { posts, onClickItem } = props;

  let contents = posts.map( post => {
    return (
      <PostListItem
        key={post.id}
        post={post}
        onClick={() => {
          onClickItem(post)
        }}
      />
    )
  });

  return (
    <Wrapper>
      { contents }
    </Wrapper>
  )
}

export default PostList;
