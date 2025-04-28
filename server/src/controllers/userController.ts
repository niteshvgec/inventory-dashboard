import {Request,Response} from "express";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";


const prisma=new PrismaClient();

export const getUser=async(req:Request,res:Response):Promise<void>=>{
    try{

const users=await prisma.users.findMany();
res.json(users);

    }catch(error){
res.status(500).json({message:"Error retrieving users"})
    }

}