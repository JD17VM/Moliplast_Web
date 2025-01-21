import styles from '../assets/styles/estilos_carta_producto.module.scss'

const CartaProducto = () => {
    return (
        <a className={styles.carta_producto}>
            <div className={styles.cont_imagen_producto}>
                <img src="https://www.kia.com/content/dam/kwcms/gt/en/images/discover-kia/voice-search/parts-80-1.jpg" alt="" />
            </div>
            <div className={styles.cont_nombre_producto}>
                <p>Soporte con manguera 13mm 20m y accesorios Gardena</p>
            </div>
        </a>
    )
}

export default CartaProducto;