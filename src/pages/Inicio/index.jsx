import React from 'react'
import posts from "../../json/posts.json";

const Inicio = () => {
  return (
  <main>
    <ul>
        {posts.map((post) => (
            <li key={post.id}>
                
            </li>
        ))}
    </ul>
  </main>
  )
}

export default Inicio