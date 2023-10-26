import { useState } from 'react';
import { images } from '../data';
import './Slider.css';

function Slider() {
  // state para controlar a posição da imagem no array
  const [index, setIndex] = useState(0);

  return (
    <section className="container-slider">
      {/*
        images[index] é a imagem que está sendo exibida no momento, usando o state index
       */}
      <img src={ images[index] } alt="random" />
      <div>
        {
          // Percorre o array de imagens e cria um botão para cada imagem
          images.map((_, indice) => (
            <button
              // Se o indice for igual ao index, o botão fica com opacidade 1 destancando, senão, 0.6.
              style={ indice === index ? { opacity: 1 } : { opacity: 0.6 } }
              key={ indice }
              // Ao clicar no botão, o state index é atualizado com o indice do botão
              onClick={ () => setIndex(indice) }
            >
              { indice }
            </button>
          ))
        }
      </div>
    </section>
  );
}

export default Slider;
