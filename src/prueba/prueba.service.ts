import { Injectable } from '@nestjs/common';
import { Prueba } from './prueba.entity';
import { pruebaStatus } from './prueba.entity';
@Injectable()
export class PruebaService {

    private sus: Prueba[] = [
        {
            id:'1',
            name: 'PrimeraPrueba',
            status: pruebaStatus.pending,
            description: 'mala la wea',

        },]
    


    getAllPrueba(){
        return this.sus;
    }

    createprueba(id:string, name: string, status: string,description: string ) {
        const nuevaPrueba= {
            id,
            name,
            status: pruebaStatus.pending,
            description
        }
        this.sus.push(nuevaPrueba);
        return nuevaPrueba;
    }
    updatePrueba (){}
    deletePrueba(){}


}
