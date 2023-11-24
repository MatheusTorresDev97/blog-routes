import React from 'react'
import Post from "../../components/PostCard";
import posts from "../../json/posts.json";
import { PostsContainer } from './styles';

const Inicio = () => {
  return (
    <main>
      <PostsContainer>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </PostsContainer>
    </main>
  )
}

export default Inicio