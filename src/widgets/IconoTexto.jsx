import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import styles from "../assets/styles/estilos_icono_texto.module.scss"

export const Titulo_Lista = ({ Icono = false, titulo, elementos_lista = false, linkRouter = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className={styles.cont_listados}>
            <div className={isHovered ? styles.hovered : ''}>
                {Icono ? (<Icono/>) : null}
                <h3>{titulo}</h3>
            </div>

            {elementos_lista ? 
            (<ul>
                {elementos_lista.map((item, index) => (
                    <li key={index} 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        {linkRouter ? 
                        (<Link to={item.enlace}>{item.elemento}</Link>) : 
                        (<a href={item.enlace}>{item.elemento}</a>)}
                        
                    </li> 
                ))}
            </ul>) : (null)
            }
            
        </div>
    );
}


export const Titulo_Icono = ({ Icono, titulo, enlace }) => {
    return (
        <a href={enlace} className={styles.cont_titulo_icono}>
            <Icono/>
            <h3>{titulo}</h3>
        </a>
    );
}