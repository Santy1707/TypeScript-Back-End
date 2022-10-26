import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTHER = `${__dirname}`
const router = Router();

const cleanFileName = (filename: String) => {
    const file = filename.split('.').shift()
    console.log(file)
    return file
}

/**
 * en la linea 20, el moduleRouter hace referencia al modulo de la ruta que se esta importando
 * lo que estamos captuando de la promesa
 * ponemos .router porque es lo que estamos importando del archivo que estamos capturando
 */

readdirSync(PATH_ROUTHER).filter((filename) => {
    const cleanName = cleanFileName(filename);
    if (cleanName !== 'index') {
        import (`./${cleanName}`).then((moduleRouter) => { // import es propia de TS en este caso, y devuelve una promesa
            console.log(`Se esta cargando la ruta..... /${cleanName} `)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export { router };