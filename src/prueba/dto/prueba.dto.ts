import { pruebaStatus } from "../prueba.entity"

export class CreatePruebasDto {
    id: string
    name: string
    status: pruebaStatus
    description: string

}

export class ActualizarDatosDto {
    name?: string
    description?: string
    status?: pruebaStatus

}