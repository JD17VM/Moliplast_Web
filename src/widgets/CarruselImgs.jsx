import React, { useState, useEffect } from 'react';
import '../assets/styles/estilos_contenedor_marcas.scss'

const CarruselImgs = (props) => {

    let data = props.data

    let lista_triplicada_para_slider = []
    for (let i = 1; i <= 3; i++) {
        lista_triplicada_para_slider = lista_triplicada_para_slider.concat(data);
    }

    const [totalSlides, setTotalSlides] = useState(0); 

    useEffect(() => {
        setTotalSlides(data.length);
      }, [data]);


    return (
        <div className="contenedor_marcas" style={{ '--cantidad_de_imagenes_de_marca': totalSlides }}>
            <div className="contenedor_slider">
                <div className="slider-track" id="sliderTrack">
                    {lista_triplicada_para_slider.map((imagen,index) => (
                        <div key={index} className="slide"><img
                        src={imagen.enlace}
                        alt=""/></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CarruselImgs;