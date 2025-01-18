import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//import styles from '../assets/styles/estilos_navegador.module.css'
import styles from '../assets/styles/estilos_navegador.module.scss'
import { Icono_Instagram, Icono_Tiktok, Icono_Facebook, Icono_Whatsapp } from '../assets/images/iconos/svg/Redes_Sociales';
import imageHelper from '../utils/imageHelper'

const Navegador = () => {
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
                    <div className={styles.cont_boton_hamburguesa}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                </header>
                <nav>
                    <ul className={styles.cont_lista_enlaces}>
                        <li>
                            <a>Nosotros</a> 
                            <ul>
                                <li><a>Nosotros 1</a></li>
                                <li><a>Nosotros 2</a></li>
                                <li><a>Nosotros 3</a></li>
                                <li><a>Nosotros 4</a></li>
                            </ul>
                        </li>
                        <li><a>Productos</a></li>
                        <li>
                            <a>Servicios</a>
                            <ul>
                                <li><a>Estos son los servicios 1</a></li>
                                <li><a>Estos son los servicios 2</a></li>
                                <li><a>Estos son los servicios 3</a></li>
                                <li><a>Estos son los servicios 4</a></li>
                            </ul>
                        </li>
                        <li><a>Catálogos</a></li>
                        <li><a>Contacto</a></li>
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