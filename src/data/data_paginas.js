const dataPaginas = {
    data: [
        { 
            nombre: "Nosotros", 
            enlace: "/nosotros"
        },
        { 
            nombre: "Productos", 
            enlace: "/productos",
            subsecciones: [
                { nombre: "Producto 1", enlace: "/productos/producto1" },
                { nombre: "Producto 2", enlace: "/productos/producto2" },
            ] 
        },
        { 
            nombre: "Servicios", 
            enlace: "/servicios",
            subsecciones: [
                { nombre: "Servicio 1", enlace: "servicios/servicio1" },
                { nombre: "Servicio 2", enlace: "servicios/servicio2" },
            ]
        },
        { 
            nombre: "Catálogos", 
            enlace: "/catalogos"
        },
        { 
            nombre: "Contacto", 
            enlace: "/contacto"
        }
        
    ]
}

export default dataPaginas;