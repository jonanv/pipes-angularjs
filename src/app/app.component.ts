import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Giovanni";
  nombreCompleto: string = "gioVANni vaRGAS GONzález";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  a: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve(
      'Llego la data'), 3500
    );
  });

  fecha: Date = new Date();
  idioma: string = 'fr';
  video: string = "mOeSfOJrUIk";
  activar: boolean = true;

}
