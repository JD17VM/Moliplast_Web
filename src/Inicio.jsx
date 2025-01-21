import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import styles from './assets/styles/estilos_inicio.module.scss'
import imageHelper from './utils/imageHelper'

import SliderImgs from './widgets/SliderImgs';
import CartaProducto from './widgets/CartaProducto';


import './assets/styles/estilos_contenedor_marcas.scss'

const ContenedorSeccion = (props) => {
    let claseFondo = ""
    if(props.color_fondo === "negro"){
        claseFondo = styles.fondo_negro;
    }else if(props.color_fondo === "blanco"){
        claseFondo = styles.fondo_blanco;
    }
    return(
        <div className={`${styles.contenedor_seccion} ${claseFondo}`}>
            <h2>{props.titulo}</h2>
            {props.children}
        </div>
    )
}


const TipoProducto = ({imagen, texto}) => {
    return (
        <Link 
            className={styles.cont_tipo_producto} 
            style={{
                backgroundImage: `url(${imagen})`,
            }}
        >
            <p>{texto}</p>
        </Link>
    )
}

const LineaDeProductos = () => {
    return (
        <ContenedorSeccion titulo="Línea de Productos" color_fondo="blanco">
            <div className={styles.contenedor_linea_productos}>
                <TipoProducto imagen={imageHelper.ImagenDemo1} texto="Este es el texto 1"/>
                <TipoProducto imagen={imageHelper.ImagenDemo2} texto="Este es el texto 2"/>
                <TipoProducto imagen={imageHelper.ImagenDemo3} texto="Este es el texto 3"/>
                <TipoProducto imagen={imageHelper.ImagenDemo4} texto="Este es el texto 4"/>
                <TipoProducto imagen={imageHelper.ImagenDemo5} texto="Este es el texto 5"/>
            </div>
        </ContenedorSeccion>
    )
}

const ProductosDestacados = () => {
    return(
        <ContenedorSeccion titulo="Productos Destacados" color_fondo="negro">
            <div className={styles.contenedor_productos_destacados}>
                <CartaProducto/>
                <CartaProducto/>
                <CartaProducto/>
                <CartaProducto/>
            </div>
        </ContenedorSeccion>
    )
}

const Marcas = () => {

    const data = [
        {
            enlace: "https://www.jpawaj.com/assets/img/imagenes_index/Medidas_proporciones/Proporciones_marcas/marca_1_23_40.png"
        },
        {
            enlace: "https://www.jpawaj.com/assets/img/imagenes_index/Medidas_proporciones/Proporciones_marcas/marca_2_23_40.png"
        },
        {
            enlace: "https://www.jpawaj.com/assets/img/imagenes_index/Medidas_proporciones/Proporciones_marcas/marca_3_23_40.png"
        },
        {
            enlace: "https://www.jpawaj.com/assets/img/imagenes_index/Medidas_proporciones/Proporciones_marcas/marca_4_23_40.png"
        },
        {
            enlace: "https://www.jpawaj.com/assets/img/imagenes_index/Medidas_proporciones/Proporciones_marcas/marca_5_23_40.png"
        },
    ]

    let lista_triplicada_para_slider = []
    for (let i = 1; i <= 3; i++) {
        lista_triplicada_para_slider = lista_triplicada_para_slider.concat(data);
    }

    const [totalSlides, setTotalSlides] = useState(0); 

    useEffect(() => {
        setTotalSlides(data.length);
      }, [data]);


    return (
        <ContenedorSeccion titulo="Marcas" color_fondo="blanco">
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
        </ContenedorSeccion>
    )
}

const Inicio = () => {

    const items = [
        { name: 'Item 1', enlace_imagen: imageHelper.ImagenDemo1 },
        { name: 'Item 2', enlace_imagen: imageHelper.ImagenDemo2 },
        { name: 'Item 3', enlace_imagen: imageHelper.ImagenDemo3 }
    ];

    return(
        <>
            <SliderImgs images={items}/>
            <LineaDeProductos/>
            {/*<ProductosDestacados/>*/}
            <Marcas/>
        </>
    )
}

export default Inicio; 