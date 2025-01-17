import React, { useState } from 'react';

import styles from '../assets/styles/estilos_footer.module.css'
import imageHelper from '../utils/imageHelper'

import { Icono_Instagram, Icono_Tiktok, Icono_Facebook, Icono_Whatsapp } from '../assets/images/iconos/svg/Redes_Sociales';

const Titulo_Lista = ({ Icono, titulo, elementos_lista = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className={styles.cont_listados}>
            <div className={isHovered ? styles.hovered : ''}>
                <Icono/>
                <h3>{titulo}</h3>
            </div>

            {elementos_lista ? 
            (<ul>
                {elementos_lista.map((item, index) => (
                    <li key={index} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <a href={item.enlace}>{item.elemento}</a>
                    </li> 
                ))}
            </ul>) : (null)
            }
            
        </div>
    );
}


const Titulo_Icono = ({ Icono, titulo, enlace }) => {
    return (
        <a href={enlace} className={styles.cont_titulo_icono}>
            <Icono/>
            <h3>{titulo}</h3>
        </a>
    );
}

const Footer = () => {
    return (
        <footer>
            <div className={styles.cont_logo_blanco}>
                <img src={imageHelper.logo_moliplast_blanco} alt="logo moliplast blanco" />
            </div>

            <div className={styles.cont_direccion_horarios}>
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

            <div className={styles.cont_secciones_importantes} style={{
                alignItems: "center"
            }}>
                <Titulo_Lista 
                Icono = {Icono_Instagram}
                titulo = "Secciones Importantes"
                elementos_lista={[
                    {elemento: "Nosotros", enlace: "#"},
                    {elemento: "Productos", enlace: "#"},
                    {elemento: "Servicios", enlace: "#"},
                    {elemento: "Catálogos", enlace: "#"},
                    {elemento: "Contacto", enlace: "#"},
                    {elemento: "Administración", enlace: "#"},
                ]}/>
            </div>

            <div className={styles.cont_canales_comunicacion}>
                <Titulo_Lista 
                Icono = {Icono_Facebook}
                titulo = "Correo"
                elementos_lista={[
                    {elemento: "jose.ramos@moliplast.com", enlace: "#"},
                    {elemento: "jose.ramos@moliplast.com", enlace: "#"},
                    {elemento: "jose.ramos@moliplast.com", enlace: "#"},
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

        </footer>
    );
}

export default Footer;