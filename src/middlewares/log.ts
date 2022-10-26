import { NextFunction, Request, Response} from "express";
// request nos ayuda a saber que navegador utiliza el usuario, que esta llegando en los headers, que tipo de petición es, si están mandando body, o query, etc.
// response nos ayuda a dar una respuesta adecuada 
// next se encarga de decir, continue a la siguiente funcion o simplemente continue, o no continue.
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
//    -- console.log("HOLA SOY EL LOG");
//    -- res.send("DESDE_MIDDLEWARE")
//     si le dejo este res.send() no va a pasar al siguiente paso, es decir, el controlador
//     i simplemente le voy a dar un mensaje adecuado, en lugar de un console.log()
//    --> next();
//     no se pueden dejar ambos, porque el res.send manda el mensaje final, 
//     y entonces no pasamos a trabajar con el controlador 
//     si lo comento, el middleware no nos deja continuar, 
//    es decir, next() es lo que determina si el middleware permite avanzar o no
//    sirve para permitir o no a determinados usuarios acceder a cierta información o no hacerlo.
//    /**
//     * Para mas información sobre los headers revisar el apuntes.txt ubicado en la carpeta general de este proyecto, :')
//     */

    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("user-agent: ", userAgent);
    next();
};


export { logMiddleware };