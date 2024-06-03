  +------------+       +-------------+       +------------+       +-------------+
  |   Usuario  |<>-----|   Servicio  |<>-----|  Reserva   |       |   Review    |
  +------------+       +-------------+       +------------+       +-------------+
  | - id       |       | - id        |       | - id       |       | - id        |
  | - nombre   |       | - nombre    |       | - usuario  |       | - usuario   |
  | - email    |       | - descrip.  |       | - servicio |       | - servicio  |
  | - tipo     |       | - categoría |       | - fecha    |       | - calificación|
  |            |       | - fotos     |       | - estado   |       | - comentario|
  +------------+       +-------------+       +------------+       +-------------+
         |                   |                     |
         |                   |                     |
         |                   v                     v
         |                +------------+          +-------------+
         |                |  Mensaje   |          | HorarioDisp |
         |                +------------+          +-------------+
         |                | - id       |          | - id        |
         +----------------| - remitente|          | - servicio  |
                          | - destinat.|
                          | - contenido|
                          +------------+
