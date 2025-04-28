import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import { Response } from "express";


const prisma=new PrismaClient();

export const getExpensesByCategory=async(
    req:Request,
    res:Response,
):Promise<void>=>{
    try{
const expenseByCategorySummaryRaw=await prisma.expenseByCategory.findMany({

    orderBy:{
        date:"desc",
    },
});
const expenseByCategorySummary=expenseByCategorySummaryRaw.map(
    (item)=>({
        ...item,
        amount:item.amount.toString(),
    })
);
res.json(expenseByCategorySummary);
    }catch(error){
        res.status(500).json({message:"Error retrieving dashboard metrics"});
    }
}