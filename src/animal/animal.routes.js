'use strict'
<<<<<<< HEAD
import { Router } from "express"
import { deleteAnimal, get, save, search, test, update } from "./animal.controller.js"

const api = Router()
api.get('/testAnimal',test)
api.post('/saveAnimal',save)
api.get('/getAnimal',get)
api.post('/buscarAnimal',search)
api.put('/updateAnimal/:id',update)
api.delete('/deleteAnimal/:id',deleteAnimal)

=======

import { Router } from 'express'
import { 
    deleteA,
    get,
    save, 
    search, 
    test, 
    update
} from './animal.controller.js'
import {
    validateJwt,
    isAdmin
} from '../middlewares/validate-jwt.js'

const api = Router()

//ROLE ADMIN
api.post('/save', [validateJwt, isAdmin], save)
api.put('/update/:id', [validateJwt, isAdmin], update)
api.delete('/delete/:id', [validateJwt, isAdmin], deleteA)

//ROLE CLIENT/ADMIN
api.get('/get', [validateJwt], get)
api.post('/search', [validateJwt], search)

api.get('/test', test)
>>>>>>> 3ad07c6332eb08b9c41912f28aaec290f72f24e8
export default api