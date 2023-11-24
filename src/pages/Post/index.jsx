import React from 'react'
import posts from "../../json/posts.json";
import { useParams } from "react-router-dom";
import PostModelo from "../../components/PostModelo";
import PostCard from "../../components/PostCard";
import { PostsRecomendadosContainer, TituloOutrosPosts } from './styles';


const Post = () => {
    const params = useParams();

    const post = posts.find((post) => post.id === Number(params.id));

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            {post.texto}
            <TituloOutrosPosts>
                Outros posts que você pode gostar:
            </TituloOutrosPosts>
            <PostsRecomendadosContainer>
                {postsRecomendados.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </PostsRecomendadosContainer>
        </PostModelo>
    )
}

export default Post