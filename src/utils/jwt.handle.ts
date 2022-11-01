import {sign, verify} from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || "token.077070"
// payload (carga a insertar en el token) , firma (que vendrá de las variables de entorno)
// como payload vamos a pasar el ID del usuario
const generateToken = async (email:string) => {
    const jwt = sign({email}, JWT_SECRET, {
        expiresIn: "2h",
    })
    return jwt;
};

const verifyToken = async () => {

};

export { generateToken, verifyToken}