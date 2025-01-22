import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import styles from '../assets/styles/estilos_footer.module.css'
import imageHelper from '../utils/imageHelper'

import { Titulo_Lista, Titulo_Icono } from './IconoTexto';
import { Icono_Instagram, Icono_Tiktok, Icono_Facebook, Icono_Whatsapp } from '../assets/images/iconos/svg/Redes_Sociales';


const Footer = ({data}) => {

    const dataModificada = data.map(objeto => ({
        elemento: objeto.nombre, // Mapear "nombre" a "elemento"
        enlace: objeto.enlace,   // Conservar la propiedad "enlace"
    }));

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

            <div className={styles.cont_secciones_importantes}>
                <Titulo_Lista 
                titulo = "Secciones Importantes"
                elementos_lista={[
                    ...dataModificada,
                    {elemento: "Administración", enlace: "#"},
                ]}
                linkRouter
                />
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