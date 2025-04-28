
"use client"
import React from 'react';
import CardPopularProducts from './CardPopularProducts';
import CardPurchaseSummary from './CardPurchaseSummary';
import CardSalesSummary from './CardSalesSummary';
import CardExpensesSummary from './CardExpensesSummary';
import StatCard from './StatCard';
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
{/* <div className='row-span-3 xl:row-span-6 bg-gray-500 '></div>
 */}
 <CardPopularProducts></CardPopularProducts>
 <CardSalesSummary></CardSalesSummary>
<CardPurchaseSummary></CardPurchaseSummary>

 <CardExpensesSummary></CardExpensesSummary>
 

 
   <StatCard title='Customer & Expenses' 
   primaryIcon={<Package className='text-blue-600 w-6 h-6'></Package>}
   dateRange='22-29 October 2023'
   details={[
    {title:"Customer Growth",amount:"175.00",changePercentage:131,IconComponent:TrendingUp},
    {title:"Expenses",amount:"10",changePercentage:-56,IconComponent:TrendingDown},

   ]}
></StatCard>

<StatCard title='Dues & Pending Orders' 
   primaryIcon={<CheckCircle className='text-blue-600 w-6 h-6'></CheckCircle>}
   dateRange='22-29 October 2023'
   details={[
    {title:"Customer Growth",amount:"250.00",changePercentage:121,IconComponent:TrendingUp},
    {title:"Expenses",amount:"147",changePercentage:-50,IconComponent:TrendingDown},

   ]}


   ></StatCard>

<StatCard title='Sales & Discount' 
   primaryIcon={<Tag className='text-blue-600 w-6 h-6'></Tag>}
   dateRange='22-29 October 2023'
   details={[
    {title:"Sales",amount:"100.00",changePercentage:20,IconComponent:TrendingUp},
    {title:"Discount",amount:"200",changePercentage:-10,IconComponent:TrendingDown},

   ]}


   ></StatCard>







  </div>
  )
}

export default Dashboard;