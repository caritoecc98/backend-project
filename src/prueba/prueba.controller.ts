import { Body, Controller, Get, Post } from '@nestjs/common';
import {PruebaService} from './prueba.service'

@Controller('prueba')
export class PruebaController {

    constructor(private modoPrueba: PruebaService){ }   

    @Get()
    getAllPruebas(){
        return this.modoPrueba.getAllPrueba();
    }

    @Post()
    createPrueba(@Body() nuevoEnte: any){
        console.log(nuevoEnte);
        return 'guardando...';
        //this.modoPrueba.createprueba()
    }

}
