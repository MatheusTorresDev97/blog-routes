import React from "react";
import { Link } from "react-router-dom";
import BotaoPrincipal from "../BotaoPrincipal";
import { Capa, PostContainer, Titulo } from "./styles";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <PostContainer>
        <Capa
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem da Capa"
        />
        <Titulo>{post.titulo}</Titulo>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </PostContainer>
    </Link>
  );
};

export default PostCard;
