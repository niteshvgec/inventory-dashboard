import { Express } from "express";      
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import morgan from "morgan";

// ROUTES IMPORT

import  dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

/*CONFIGURATIONS*/

dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

/*ROUTES*/

app.use("/dashboard",dashboardRoutes);//http://localhost:8000/dashboard
app.use("/products",productRoutes);//http://localhost:8000/productRoutes
app.use("/users",userRoutes);//http://localhost:8000/userRoutes
app.use("/expense",expenseRoutes);//http://localhost:8000/expenseRoutes

/*SERVER*/

const port =Number(process.env.PORT) || 3001;
app.listen(port,"0.0.0.0",()=>{
    console.log(`Server running on port ${port}`);
});
