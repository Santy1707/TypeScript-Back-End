import "dotenv/config"
import express from "express";
import cors from "cors"
const PORT = process.env.PORT || 3001
import { router } from "./routes";
import db from "./config/mongo"
const app = express()
/**
 * La API puede ser consumida por cualquier origen gracias a los cors
 */
app.use(cors(
//   {
//  origin: "*"   
// }
))
app.use(express.json())
app.use(router)
db().then(()=> console.log("Conexion Ready"))

app.listen(PORT, () => console.log(`Listo en el port: ${PORT}`))