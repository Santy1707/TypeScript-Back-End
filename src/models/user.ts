import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema <User>(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        country: {
            type: String
        },
        description: {
            type: String,
            default: "Hola ché, como vas bro"
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const UserModel = model("users", UserSchema);
export default UserModel;

