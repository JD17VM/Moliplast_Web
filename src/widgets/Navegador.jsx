import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styles from '../assets/styles/estilos_navegador.module.scss'
import { Icono_Instagram, Icono_Tiktok, Icono_Facebook, Icono_Whatsapp } from '../assets/images/iconos/svg/Redes_Sociales';
import imageHelper from '../utils/imageHelper'

import React, { useState } from 'react';

const info = {
    data: [
        { 
        nombre: "Nosotros", 
        subsecciones: [
            { nombre: "Nosotros 1", enlace: "/nosotros-1" },
            { nombre: "Nosotros 2", enlace: "/nosotros-2" },
            { nombre: "Nosotros 3", enlace: "/nosotros-2" },
            { nombre: "Nosotros 4", enlace: "/nosotros-2" },
        ]
        },
        { 
        nombre: "Productos", 
        enlace: "/productos" 
        },
        { 
        nombre: "Servicios", 
        subsecciones: [
            { nombre: "Servicio 1", enlace: "/servicio-1" },
            { nombre: "Servicio 2", enlace: "/servicio-2" },
        ]
    },
    ]
}

const respuesta = info.data


const Navegador = () => {

    const [subseccion_abierta, setSubseccionAbierta] = useState(null);
    const toggleSubseccion = (index) => {
        setSubseccionAbierta(prevIndex => (prevIndex === index ? null : index));
    };

    const [navegador_activo, setNavegadorActivo] = useState(true)

    return (
        <>
            <div className={styles.cont_navegador}>
                <header>
                    <div className={styles.cont_logo}>
                        <img src={imageHelper.logo_moliplast} alt="logo moliplast" />
                    </div>
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
                    <button onClick={() => setNavegadorActivo(!navegador_activo)} className={styles.cont_boton_hamburguesa}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </header>
                <nav>
                    <ul className={`${styles.cont_lista_enlaces}`} style={{
                        display: `${navegador_activo ? 'flex' : 'none'}`,
                    }}>
                        {respuesta.map((seccion, index) => (
                            <li key={index}>
                                {seccion.enlace ? (
                                    <a>{seccion.nombre}</a>
                                ) : (
                                    <>
                                    <a 
                                        className={subseccion_abierta === index ? styles.flecha_despliegue_abierto : styles.flecha_despliegue_cerrado} 
                                        onClick={() => toggleSubseccion(index)}>{seccion.nombre}
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