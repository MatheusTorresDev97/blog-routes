import React from "react";
import { FotoCapa, PostModeloContainer, Titulo, PostConteudoContainer } from "./styles";


const PostModelo = ({ fotoCapa, titulo, children }) => {
    return (
        <PostModeloContainer>
            <FotoCapa backgroundImage={fotoCapa} />
            <Titulo>{titulo}</Titulo>
            <PostConteudoContainer >{children}</PostConteudoContainer>
        </PostModeloContainer>
    );
};

export default PostModelo;