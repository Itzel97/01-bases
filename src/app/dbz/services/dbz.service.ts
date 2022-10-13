import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {


    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ]

    get personajes(): Personaje[] {
        // esto es practica de javascript mas inforacion en el material adjunto de la clase.
        return [...this._personajes];
    }
    constructor() {
        console.log('servicio inicializado')
    }

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push(personaje);

    }


}   