class Productos {
    constructor(id, nombre, precio, seccion, cantidad = 0) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.seccion = seccion;
        this.cantidad = cantidad
    };
    agregarAlCarro() {
        this.cantidad++;
    };
};
