import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/items"

const insertCar = async (item: Car) =>{
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const getCars = async () => {
    const responseCars = await ItemModel.find({})
    return responseCars; 
}

const getCar = async (_id: string) => {
    const responseCar = await ItemModel.findById({ _id})
    return responseCar
}

const updateCar = async (_id: string, data: Car) => {
    const responseUpdate = await ItemModel.findOneAndUpdate(
        {_id}, 
        data,
        {
        new: true
    });
    // el new:true nos devuelve el documento actualizado
    return responseUpdate
}

const deleteCar = async (id: string) => {
    const deletedCar = await ItemModel.remove({ _id:id });
    return deletedCar
}


export {insertCar, getCars, getCar, updateCar, deleteCar}