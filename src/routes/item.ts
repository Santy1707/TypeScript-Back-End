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

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router }