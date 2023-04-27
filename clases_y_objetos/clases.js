class Productos {
    constructor(id, nombre, precio, cantidad=0){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad
    };
    agregarAlCarro(){
        this.cantidad++;
    };
};
