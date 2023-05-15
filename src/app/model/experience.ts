export class Experience {
  id?: number;
  nombreEx: string;
  descripcionEx: string;
  constructor(nombreEx: string, descripconEX: string) {
    this.nombreEx = nombreEx;
    this.descripcionEx = descripconEX;
  }
}
