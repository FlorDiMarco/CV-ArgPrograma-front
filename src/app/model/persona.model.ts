export class Persona {
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  img: string;

  constructor(
    nombre: string,
    apellido: string,
    img: string,
    descripcion: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
    this.img = img;
  }
}