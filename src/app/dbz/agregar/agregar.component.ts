import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // output es cuando un componente hijo desea emitir un mensaje al componente padre.
  // se especifica el tipo de dato EventEmitter<Personaje> = new EventEmitter();
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  //inicalizamos la inyeccion de dependecias del servicio
  constructor(private dbzService: DbzService){

  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;

    } else {
      console.log(this.nuevo);

      // mandamos a llamar el metodo dentro del servicio.





      
      this.dbzService.agregarPersonaje(this.nuevo);
      // cuando esta listo emitimos este evento con el tipo de dato a enviar.
      //this.onNuevoPersonaje.emit(this.nuevo);

      this.nuevo = {
        nombre: '',
        poder: 0
      }
    }
  }
}
