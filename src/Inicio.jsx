import styles from './assets/styles/estilos_inicio.module.scss'
import imageHelper from './utils/imageHelper'

//import UncontrolledExample from './widgets/HeroSlider';

import SliderImgs from './widgets/SliderImgs';

const Inicio = () => {

    const items = [
        { name: 'Item 1', enlace_imagen: imageHelper.ImagenDemo1 },
        { name: 'Item 2', enlace_imagen: imageHelper.ImagenDemo2 },
        { name: 'Item 3', enlace_imagen: imageHelper.ImagenDemo3 }
    ];

    return(
        <>
            <SliderImgs images={items}/>
        </>
    )
}

export default Inicio; 