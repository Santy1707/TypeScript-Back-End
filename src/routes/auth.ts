import { Request, Response, Router } from "express";
import {registerCtrl, loginCtrl} from "../controllers/auth"


const router = Router();

/**http://localhost:3002/auth o /register [POST]*/


router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
