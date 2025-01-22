import styles from './assets/styles/estilos_contacto.module.scss'

import {Titulo_Lista, Titulo_Icono} from "./widgets/IconoTexto"
import { Icono_Instagram, Icono_Tiktok, Icono_Facebook, Icono_Whatsapp } from './assets/images/iconos/svg/Redes_Sociales';

const Contacto = () => {
    return (
        <>
        <div className={styles.contenedor_contacto}>
            <h1>Contacto</h1>
            <div>
                <div className={styles.contenedor_direcciones}>
                    <div className={styles.contenedor_map}>

                    </div>
                    <div className={styles.direcciones}>
                        <Titulo_Lista 
                        Icono = {Icono_Instagram}
                        titulo = "Este es un titulo"
                        elementos_lista={[
                            {elemento: "Calle Felipe Pinglo 112 Apima - Paucarpata (Tienda principal)", enlace: "#"},
                        ]}/>

                        <Titulo_Lista 
                        Icono = {Icono_Tiktok}
                        titulo = "Este es un titulo"
                        elementos_lista={[
                            {elemento: "Elemento 1", enlace: "#"},
                            {elemento: "Elemento 2", enlace: "#"},
                        ]}/>
                    </div>
                </div>
                <div className={styles.contenedor_redes_contacto}>
                        <Titulo_Lista 
                        Icono = {Icono_Instagram}
                        titulo = "Este es un titulo"
                        elementos_lista={[
                            {elemento: "Calle Felipe Pinglo 112 Apima - Paucarpata (Tienda principal)", enlace: "#"},
                        ]}/>

                        <Titulo_Icono 
                        Icono = {Icono_Whatsapp}
                        titulo = "Correo"
                        enlace = "#"
                        />
                        <Titulo_Icono 
                        Icono = {Icono_Instagram}
                        titulo = "Correo"
                        enlace = "#"
                        />
                        <Titulo_Icono  
                        Icono = {Icono_Instagram}
                        titulo = "Correo"
                        enlace = "#"
                        />
                </div>
            </div>
        </div>
        </>

    )
}

export default Contacto;