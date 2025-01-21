import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styles from '../assets/styles/estilos_navegador.module.scss'
import { Icono_Instagram, Icono_Tiktok, Icono_Facebook, Icono_Whatsapp } from '../assets/images/iconos/svg/Redes_Sociales';
import imageHelper from '../utils/imageHelper'

import React, { useState, useEffect } from 'react';

//import dataPaginas from '../data/data_paginas'


//const data = dataPaginas.data


const Navegador = ({data}) => {

    const [subseccion_abierta, setSubseccionAbierta] = useState(null);
    const toggleSubseccion = (index) => {
        setSubseccionAbierta(prevIndex => (prevIndex === index ? null : index));
    };

    const [navegador_movil_activo, setNavegadorMovilActivo] = useState(false);


    return (
        <>
            <div className={styles.cont_navegador}>
                <header>
                    <Link to='/' className={styles.cont_logo}>
                        <img src={imageHelper.logo_moliplast} alt="logo moliplast" />
                    </Link>
                    <div className={styles.cont_contacto}>
                        <div>
                            <span className="material-symbols-outlined">call</span>
                            <p>Contáctanos</p>
                            <p>01 7654321 | +51 987654321</p>
                        </div>

                        <div>
                            <span className="material-symbols-outlined">mail</span>
                            <p>Correo Electrónico</p>
                            <p>informes@moliplast.com</p>
                        </div>
                    </div>
                    <div className={styles.cont_redes_sociales}>
                        <div>
                            <Icono_Instagram/>
                        </div>
                        <div>
                            <Icono_Facebook/>
                        </div>
                        <div>
                            <Icono_Whatsapp/>
                        </div>
                    </div>
                    <button onClick={() => setNavegadorMovilActivo(!navegador_movil_activo)} className={styles.cont_boton_hamburguesa}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </header>
                <nav>
                    <ul className={`${styles.cont_lista_enlaces}`}>
                        {data.map((seccion, index) => (
                            <li key={index}>
                                {!seccion.subsecciones ? (
                                    <Link to={seccion.enlace} >{seccion.nombre}</Link>
                                ) : (
                                    <>
                                    <Link 
                                        to={seccion.enlace}
                                        className={subseccion_abierta === index ? styles.flecha_despliegue_abierto : styles.flecha_despliegue_cerrado} 
                                        onMouseEnter={() => toggleSubseccion(index)}
                                        onMouseLeave={() => toggleSubseccion(index)}
                                    >
                                        {seccion.nombre} 
                                    </Link>
                                    <ul 
                                        className={`${subseccion_abierta === index ? styles.mostrar : styles.ocultar}`}
                                        onMouseEnter={() => toggleSubseccion(index)}
                                        onMouseLeave={() => toggleSubseccion(index)}
                                    >
                                        {seccion.subsecciones.map((subseccion,subIndex) => (
                                            <li key={subIndex}><Link to={subseccion.enlace} >{subseccion.nombre}</Link></li>
                                        ))}
                                    </ul>
                                    </>
                                )}
                                
                            </li>
                        ))}
                    </ul>

                    <ul className={`${styles.cont_lista_enlaces_movil} ${navegador_movil_activo ? styles.mostrar : styles.ocultar}`}>
                    {data.map((seccion, index) => (
                            <li key={index}>
                                {seccion.enlace ? (
                                    <a>{seccion.nombre}</a>
                                ) : (
                                    <>
                                    <a 
                                        className={subseccion_abierta === index ? styles.flecha_despliegue_abierto : styles.flecha_despliegue_cerrado} 
                                        onClick={() => toggleSubseccion(index)}
                                    >
                                        {seccion.nombre} 
                                    </a>
                                    <ul 
                                        className={`${subseccion_abierta === index ? styles.mostrar : styles.ocultar}`}
                                    >
                                        {seccion.subsecciones.map((subseccion,subIndex) => (
                                            <li key={subIndex}><a>{subseccion.nombre}</a></li>
                                        ))}
                                    </ul>
                                    </>
                                )}
                                
                            </li>
                        ))}
                    </ul>

                    <div className={styles.cont_input}>
                        <input type="search" id="fname" name="fname" placeholder='Buscar producto'/>
                        <button>
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                </nav>
            </div>
    
            <div className={styles.espacio_nav}></div>
        </>
    );
}

export default Navegador;