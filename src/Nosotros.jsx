import styles from './assets/styles/estilos_nosotros.module.scss'
import {Marcas} from './Inicio'
const Nosotros = () => {
    return (
        <>
        <div className={styles.contenedor_nosotros}>
            <h1>Nosotros</h1>
            <div>
                <p>MOLIPLAST S.R.L., es una empresa de comercialización y de servicios, 100% Peruana con un equipo de profesionales de primer nivel, con amplios conocimientos y experiencia en el tema de riego; ofrecemos Sistemas de Riego Tecnificado por Aspersión Agrícola, Riego por Goteo, Reservorios de alta calidad, tubos PVC, PE, PEAD, Tanques y Biodigestores; además cultivamos una estrecha relación con nuestros clientes y una atención personalizada en nuestras filiales de Arequipa, Pedregal y La Joya.
                <br/><br/>
                Los servicios prestados por Moliplast S.R.L., cumplen con los Requisitos de Calidad especificados por las normas técnicas Nacionales y sus labores se desarrollan dentro de un Sistema de Aseguramiento de la Calidad y Seguridad.</p>
                <img src="https://cdn.prod.website-files.com/6643a82fc46ca462b5ef9921/6643a82fc46ca462b5efa45c_16-Guia-para-disenar-un-garaje-en-casa-medidas-consejos-y-sugerencias-p-500.webp" alt="" />
            </div>
        </div>
        <Marcas/>
        </>
    )
}

export default Nosotros;