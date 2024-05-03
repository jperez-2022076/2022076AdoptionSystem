'use strict'

import User from '../user/user.model.js'
<<<<<<< HEAD
import { checkUpdate } from '../utils/validator.js'
import Animal from './animal.model.js'

export const test=(req,res)=>{
    return res.send('Hola')
}

export const save = async(req,res)=>{
    try {
        let data = req.body
        //validar que el keerper exista buscar a la base de datos
        let user = await User.findOne({_id: data.keeper})
        if(!user) return res.status(404).send({message: 'Keeper not found'})
        //crear la instacia del animal
        let animal = new Animal(data)
        //guardar
        await animal.save()
        //responder si todo esta bien
        return res.send({message: 'Animal saved successfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error saving animal'})
    }
}

export const get = async(req,res) =>{
    try {
        let animals = await Animal.find().populate('keeper',['name','phone'])
        if(animals.length === 0) return res.status(400).send({message: 'Not found'})
        return res.send({animals})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error gettomg animals'})
        
    }
}

export const update = async(req,res)=>{
    try {
        let{id} = req.params
        let data = req.body
        let update = checkUpdate(data,false)
        if(!update) return res.status(400).send({message: ' have submit some data that cannot be update or missing data '})

        let updatdAnimal = await Animal.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
            ).populate('keeper',['name','phone'])
        if(!updatdAnimal) return res.status(404).send({message: 'animal not found' })
        return res.send({message:'animal update seccessfully',updatdAnimal})
        
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'error apdating animal'})
        
    }
}

export const deleteAnimal = async(req,res)=>{
     try {
        let {id} = req.params
        let deleteAnimal =await Animal.deleteOne({_id: id})
        if(deleteAnimal.deletedCount == 0) return res.status(404).send({message:'no es elimino pa'})
        return res.send({message:'se elimino pa'})
    } catch (err) {
        console.error(err)
        return res.status(404).send({message: 'no se elimino pipipi'})
        
    }
}

export const search = async(req,res)=>{
    try {
        //obetener el parametro
        let {search} = req.body
        //buscar
        let animals = await Animal.find(
            {name: search}
        ).populate('keeper',['name','phone'])
        //validar
        if(animals.length == 0) return res.status(404).send({message: 'animals not found'})
        return res.send({message:'animals founds',animals})
        // responder
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'error al buscar'})
        
    }

=======
import Animal from './animal.model.js'
import { checkUpdate } from '../utils/validator.js'

export const test = (req, res)=>{
    return res.send({message: 'Function test is running | Animal'})
}

export const save = async(req, res)=>{
    try{
        //Capturar la data
        let data = req.body
        //Validar que el Keeper exista (Buscar a la BD)
        let user = await User.findOne({_id: data.keeper})
        if(!user) return res.status(404).send({message: 'Keeper not found'})
        //Crear la 'instancia' del 'Animal'
        let animal = new Animal(data)
        //Guardar el animal
        await animal.save()
        //Responder si todo sale bien
        return res.send({message: 'Animal saved successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error saving animal', err})
    }
}

export const get = async(req, res)=>{
    try{
        let animals = await Animal.find().populate('keeper', ['name', 'phone']) //Encuentre o no encuentre []
        return res.send({ animals })
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error getting animals'})
    }
}

export const update = async(req, res)=>{
    try{
        //Capturar el id (a quien voy a actualizar)
        let { id } = req.params
        //Capturar la data
        let data = req.body
        //Validar que vengan datos **
        let update = checkUpdate(data, false)
        if(!update) return res.status(400).send({message: 'Have submitted some data that cannot be updated or missing data'})
        //Actualizar
        let updatedAnimal = await Animal.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        ).populate('keeper', ['name', 'phone'])
        //Validar la actualización
        if(!updatedAnimal) return res.status(404).send({message: 'Animal not found, not updated'})
        //Responder si todo sale bien
        return res.send({message: 'Animal updated successfully', updatedAnimal})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error updating animal'})
    }
}

export const deleteA = async(req, res)=>{
    try{
        //X Verificar si tiene una reunión en proceso X
        //Capturar el id del 'animal' a eliminar
        let { id } = req.params
        //Eliminar
        let deletedAnimal = await Animal.deleteOne({_id: id})
        //Validar que se eliminó
        if(deletedAnimal.deletedCount == 0) return res.status(404).send({message: 'Animal not found, not deleted'})
        //Responder
        return res.send({message: 'Deleted animal successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting animal'})
    }
}

export const search = async(req, res)=>{
    try{
        //Obtener el parámetro de búsqueda
        let { search } = req.body
        //Buscar
        let animals = await Animal.find(
            {name: search}
        ).populate('keeper', ['name', 'phone'])
        //Validar la respuesta
        if(animals.length == 0) return res.status(404).send({message: 'Animals not found'})
        //Responder si todo sale bien
        return res.send({message: 'Animals found', animals})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error searching animals'})
    }
>>>>>>> 3ad07c6332eb08b9c41912f28aaec290f72f24e8
}