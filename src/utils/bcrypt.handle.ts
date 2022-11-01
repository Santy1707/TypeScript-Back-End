import {hash, compare} from "bcryptjs"



const encrypt = async (passwordPlane: string, ) => {
    const passwordHash = await hash(passwordPlane, 8)
    return passwordHash;
}

const verified = async (passwordPlane: string, passHash: string) => {
    const isCorrect = await compare(passwordPlane, passHash); 
    return isCorrect; // da true o false
}

export {encrypt, verified}