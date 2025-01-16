import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styles from '../assets/styles/estilos_navegador.module.css'
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
                            <img src={imageHelper.icono_instagram} alt="" />
                        </div>
                        <div>
                            <img src={imageHelper.icono_facebook} alt="" />
                        </div>
                        <div>
                            <img src={imageHelper.icono_whatsapp} alt="" />
                        </div>
                    </div>
                </header>
                <nav>
                    <ul>
                        <li>
                            <a>Nosotros</a> 
                            <ul>
                                <li>Nosotros 1</li>
                                <li>Nosotros 2</li>
                                <li>Nosotros 3</li>
                                <li>Nosotros 4</li>
                            </ul>
                        </li>
                        <li><a>Productos</a></li>
                        <li>
                            <a>Servicios</a>
                            <ul>
                                <li>Estos son los servicios 1</li>
                                <li>Estos son los servicios 2</li>
                                <li>Estos son los servicios 3</li>
                                <li>Estos son los servicios 4</li>
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