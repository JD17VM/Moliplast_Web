import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components'

const StyledCarousel = styled(Carousel)`
    width: 100%;
    aspect-ratio: 3/1;

    >div{
        height:100%;

        >div{
            height:100%;
        }
    } 

    a > span.visually-hidden{
        display:none;
    }

    .carousel-caption{
        display:none;
    }

`



function SliderImgs({ images }) {
  return (
    <StyledCarousel data-bs-theme="dark">
      {images.map((imagen, index) => (
        <Carousel.Item interval={3000} key={index}>
          <img
            className="d-block w-100"
            src={imagen.enlace_imagen}
            alt={imagen.name}
          />
          {/*<Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>*/}
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
}

export default SliderImgs;