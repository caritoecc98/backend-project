import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { ActualizarDatosDto, CreatePruebasDto } from './dto/prueba.dto'

@Controller('prueba')
export class PruebaController {

    constructor(private modoPrueba: PruebaService) { }

    @Get()
    getAllPruebas() {
        return this.modoPrueba.getAllPrueba();
    }

    @Post()
    createPrueba(@Body() nuevoEnte: CreatePruebasDto) {
        return this.modoPrueba.createprueba(nuevoEnte.id, nuevoEnte.name, nuevoEnte.status, nuevoEnte.description)

    }

    @Delete(':id')
    eliminarPrueba(@Param('id') id: string) {
        this.modoPrueba.deletePrueba(id)
    }


    @Put(":id")
    actualizarPrueba(@Param('id') id: string, @Body() camposActualizados: ActualizarDatosDto) {
        return this.modoPrueba.updatePrueba(id, camposActualizados)
    }

}
