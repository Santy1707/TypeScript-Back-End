import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const userExist = await UserModel.findOne({ email});
    if (userExist) return "THE_USER_ALREADY_EXISTS ";
    const passHash = await encrypt(password); // Aqui llega 12341, luego de ser hasheada, se hace el registro
    const registerNewUser = await UserModel.create({
        email, 
        password: passHash, 
        name})
    return registerNewUser
}

const loginUser = async ({email, password}: Auth) => {
    const userExist = await UserModel.findOne({ email});
    if (!userExist) return "NOT_FOUND_USER";

    const passwordHash = userExist.password // el encriptado de la password
    const isCorrect = await verified(password, passwordHash)

    if(!isCorrect) return "PASSWORD_INCORRECT"


    const token = await generateToken(userExist.email);
    // generateToken devuelve una promesa
    const data = {
        token: token,
        user: userExist,
    }
    return data
}

export {registerNewUser, loginUser}