import {Router, Request, Response} from "express"
import { 
    getItem, 
    getItems, 
    postItem, 
    updateItem, 
    deleteItem 
} from "../controllers/item";

const router = Router();
/**
 * http/localhost:3002/items [GET]
 */

router.get('/', getItem);

router.get('/id', getItems);

router.post('/', postItem);

router.put('/', updateItem);

router.delete('/', deleteItem);

export { router }