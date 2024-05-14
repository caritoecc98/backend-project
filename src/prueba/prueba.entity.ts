export enum pruebaStatus {
    pending = 'pendiente',
    progress = 'progreso',
    finshed = 'terminado',

}
export class Prueba{
    id: string
    name: string 
    status: pruebaStatus
    description: string
}

const test = new Prueba()
test.id