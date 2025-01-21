import { Link } from 'react-router-dom';
import styles from './assets/styles/estilos_inicio.module.scss'
import imageHelper from './utils/imageHelper'

import SliderImgs from './widgets/SliderImgs';


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
        <ContenedorSeccion titulo="Línea de Productos" color_fondo="negro">
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
        <ContenedorSeccion titulo="Productos Destacados" color_fondo="blanco">

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
            <ProductosDestacados/>
        </>
    )
}

export default Inicio; 