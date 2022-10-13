import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Maestro roshi',
    poder: 10000
  }


//   agregarNuevoPersonaje(argumento: Personaje) {
    // sirve para depurar el codigo y  al momento de ejecutar el codigo se 
    //detendra en el navegador EXCLUSIVO para navegador de google y VS.
    //podemos uasr VS como una id de dessarollo
    //debugger; 
//     this.personajes.push(argumento)
 //  }

  //inyeccion de dependencias
  constructor(private dbzService: DbzService) {
  }


}
