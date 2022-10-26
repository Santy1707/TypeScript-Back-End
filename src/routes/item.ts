import {Router, Request, Response} from "express"
import { 
    getItem, 
    getItems, 
    postItem, 
    updateItem, 
    deleteItem 
} from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();
/**
 * http/localhost:3002/items [GET]
 */

router.get('/', logMiddleware ,getItems);

router.get('/:id', logMiddleware, getItem);

router.post('/', postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

export { router }