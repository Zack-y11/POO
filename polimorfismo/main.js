//POLIMORFISMO
class Ropa{
    constructor(marca, tipo, precio){
        this.marca = marca;
        this.tipo = tipo;
        this.precio = precio;
    }

    mostrar(){
        console.log(`Esta prenda es una ${this.tipo}, de la marca ${this.marca} y su precio es $${this.precio}`)
    }
}
//Heredamiento
class Camisa extends Ropa {
    mostrar(){
        console.log(`Esta prenda es una ${this.tipo}, de la marca ${this.marca} y su precio es $${this.precio}`)
    }
}

class Pantalon extends Ropa{
    mostrar(){
        console.log(`Esta prenda es una ${this.tipo}, de la marca ${this.marca} y su precio es $${this.precio}`)
    }
}

class Calzado extends Ropa{
    mostrar(){
        console.log(`Esta prenda es una ${this.tipo}, de la marca ${this.marca} y su precio es $${this.precio}`)
    }
}

const ropa1 = new Camisa('Polo', 'Camisa con Cuello', 15)
const ropa2 = new Pantalon('Stylus', 'Jeans Azul', 18)
const calzado1 = new Calzado("Nike", "Zapato Urbano", 30)


ropa1.mostrar()
ropa2.mostrar()
calzado1.mostrar()
console.log('___________EJEMPLO 2 POLIMORFISMO_____________')

class Empresa{
    constructor(nombre, sector, ingreso){
        this.nombre = nombre;
        this.sector = sector;
        this.ingreso = ingreso;
    }

    estadoEmpleado(){
        console.log(`El empleado: ${this.nombre}, del sector ${this.sector} tiene un ingreso de $${this.ingreso}`)
    }
}

class Finanzas  extends Empresa{
    estadoEmpleado(){
        console.log(`El empleado: ${this.nombre}, del sector ${this.sector} tiene un ingreso de $${this.ingreso}`)
    }
}
class RecursosHumanos extends Empresa {
    estadoEmpleado(){
        console.log(`El empleado: ${this.nombre}, del sector ${this.sector} tiene un ingreso de $${this.ingreso}`)
    }
}
class Marketing extends Empresa{
    estadoEmpleado(){
        console.log(`El empleado: ${this.nombre}, del sector ${this.sector} tiene un ingreso de $${this.ingreso}`)
    }
}
class Produccion extends Empresa{
    estadoEmpleado(){
        console.log(`El empleado: ${this.nombre}, del sector ${this.sector} tiene un ingreso de $${this.ingreso}`)
    }
}

const empleado1 = new Finanzas('Luis Rodriguez', 'Finanzas', 750)
empleado1.estadoEmpleado()
const empleado2 = new  RecursosHumanos ('María Pérez','RH',600)
empleado2.estadoEmpleado()
const empleado3 = new Produccion('Juan Hernandez','Producción',900)
empleado3.estadoEmpleado()
const empleado4 = new  Marketing('Pedro Sánchez','Marketing',800)
empleado4.estadoEmpleado()