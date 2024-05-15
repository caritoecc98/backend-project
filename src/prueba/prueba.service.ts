import { Injectable } from '@nestjs/common';
import { Prueba } from './prueba.entity';
import { pruebaStatus } from './prueba.entity';
import { ActualizarDatosDto } from './dto/prueba.dto';
@Injectable()
export class PruebaService {

    private sus: Prueba[] = [
        {
            id: '1',
            name: 'PrimeraPrueba',
            status: pruebaStatus.pending,
            description: 'mala la wea',

        },]



    getAllPrueba() {
        return this.sus;
    }

    createprueba(id: string, name: string, status: string, description: string) {
        const nuevaPrueba = {
            id,
            name,
            status: pruebaStatus.pending,
            description
        }
        this.sus.push(nuevaPrueba);
        return nuevaPrueba;
    }
    updatePrueba(id: string, updatedPruebas: ActualizarDatosDto): Prueba {
        const ente = this.getPruebaById(id);
        const nuevoEnte = Object.assign(ente, updatedPruebas);
        this.sus = this.sus.map(prueba => prueba.id === id ? nuevoEnte : prueba);
        return nuevoEnte;

    }

    getPruebaById(id: string): Prueba {
        return this.sus.find(prueba => prueba.id === id)

    }

    deletePrueba(id: string) {
        this.sus = this.sus.filter(prueba => prueba.id !== id)

    }


}
