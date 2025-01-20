import Carousel from 'react-bootstrap/Carousel';
import imageHelper from '../utils/imageHelper'

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



function SliderImgs() {
  return (
    <StyledCarousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={imageHelper.ImagenDemo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={imageHelper.ImagenDemo2}
          alt="Second slide"
        />
        <Carousel.Caption >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={imageHelper.ImagenDemo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  );
}

export default SliderImgs;