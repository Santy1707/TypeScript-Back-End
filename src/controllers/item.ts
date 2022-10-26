import { Response, Request } from "express";
import ItemModel from "../models/items";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";
import { handleHttp } from "../utils/error.handle";


const getItem = async ({params}: Request , res: Response) => {
    try {
        const id = params.id // pdoria ser const {id} = params
        const response = await getCar(id)
        const data = response ? response: "NOT_FOUND"
        res.send(data)
        
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM")
    }
}

const getItems = async (req: Request , res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS")
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const updateItem = async ({body, params}: Request, res: Response) => {
    try {
        const {id} = params
        const responseUpdate = await updateCar(id, body)
        res.send(responseUpdate)
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM")
    }
}

const deleteItem = async ({params}: Request , res: Response) => {
    try {
        const id = params.id // pdoria ser const {id} = params
        const response = await deleteCar(id)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}


export {getItem, getItems, updateItem, postItem, deleteItem};
