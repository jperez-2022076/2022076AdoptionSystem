//Configuración Express

//Importaciones
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
<<<<<<< HEAD
import animalRouters from '../src/animal/animal.routes.js'

=======
import animalRoutes from '../src/animal/animal.routes.js'
import appointmentRoutes from '../src/appointment/appointment.routes.js'
>>>>>>> 3ad07c6332eb08b9c41912f28aaec290f72f24e8

//Configuraciones
const app = express() //Crear el servidor
config()
const port = process.env.PORT || 3200

//Configurar el servidor de express
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) //Aceptar o denegar las solicitudes de diferentes orígenes (local, remoto) /políticas de acceso
app.use(helmet()) //Aplica capa de seguridad
app.use(morgan('dev')) //Crea logs de solicitudes al servidor HTTP

//Declaración de rutas
app.use(userRoutes)
<<<<<<< HEAD
app.use(animalRouters)
=======
app.use('/animal', animalRoutes)
app.use('/appointment', appointmentRoutes)
>>>>>>> 3ad07c6332eb08b9c41912f28aaec290f72f24e8


//Levantar el servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}