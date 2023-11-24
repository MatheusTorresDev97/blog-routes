import React from 'react';
import fotoSobreMim from '../../assets/minha-foto.jpg';
import PostModelo from '../../components/PostModelo';
import fotoCapa from '../../assets/sobre_mim_capa.png';
import { Subtitulo, Paragrafo, FotoSobreMim } from './styles';

const SobreMim = () => {
  return (
    <PostModelo
    fotoCapa={fotoCapa}
    titulo='Sobre mim'
    >
       <Subtitulo>
        Olá, eu sou o Matheus!
       </Subtitulo>
       <FotoSobreMim src={fotoSobreMim} alt="minha-foto" />
       <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste dolor eum commodi libero fugit a, ratione asperiores similique numquam dolore quae, praesentium dicta enim quam odio quis maxime culpa!</Paragrafo>
       <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste dolor eum commodi libero fugit a, ratione asperiores similique numquam dolore quae, praesentium dicta enim quam odio quis maxime culpa!</Paragrafo>
       <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste dolor eum commodi libero fugit a, ratione asperiores similique numquam dolore quae, praesentium dicta enim quam odio quis maxime culpa!</Paragrafo>
       <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste dolor eum commodi libero fugit a, ratione asperiores similique numquam dolore quae, praesentium dicta enim quam odio quis maxime culpa!</Paragrafo>
       <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste dolor eum commodi libero fugit a, ratione asperiores similique numquam dolore quae, praesentium dicta enim quam odio quis maxime culpa!</Paragrafo>
       <Paragrafo>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste dolor eum commodi libero fugit a, ratione asperiores similique numquam dolore quae, praesentium dicta enim quam odio quis maxime culpa!</Paragrafo>
       
    </PostModelo>
  )
}

export default SobreMim