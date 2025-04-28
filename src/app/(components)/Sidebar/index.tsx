
"use client";
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from 'lucide-react';
import React from 'react'
import { useAppDispatch } from '@/app/redux';
import { useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


interface SidebarLinkProps{
    href:string;
    icon:LucideIcon;
    label:string;
    isCollapsed:boolean;
}

const SidebarLink=({
    href,
    icon:Icon,
label,
isCollapsed

}:SidebarLinkProps)=>{
    const pathname=usePathname();
    const isActive=pathname===href || (pathname==="/" && href==="/dashboard");
    return(
        <Link href={href}>

            <div className={`cursor-pointer flex items-center ${isCollapsed ?"justify-center py-4":"justify-start px-12 py-4"}
            
            hover:text-blue-500  hover:bg-blue-100 gap-3 transition-colors ${isActive?"bg-blue-200 text-white":""}`}>
<Icon className='w-6 h-6 !text-gray-700'></Icon>
<span className={`${isCollapsed ?"hidden":"block"} font font-medium text-gray-700`}>
    {label}
</span>
            </div>
        </Link>
    )
}

const Sidebar = () => {

    const dispatch=useAppDispatch();
    const isSidebarCollapsed=useAppSelector((state)=>state.global.isSidebarCollapsed);

const toggleSidebar=()=>{
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed)); 
}
const SidebarClassNames=`fixed flex flex-col ${
    isSidebarCollapsed?"w-0 md:w-16":"w-72 md:w-64"
} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40 `

  return (
    <div className={SidebarClassNames}>

        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8  ${isSidebarCollapsed?"px-5":"px-8"}`}>
<div>logo</div>
<h1 className={` ${isSidebarCollapsed?"hidden":"block"} font-extrabold text-2xl`}>EDSTOCK</h1>

<button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
<Menu className='w-4 h-4'></Menu> </button>
        </div>
       {/* LINKS */}

       <div className='flex-grow mt-8'>
<SidebarLink href='/Dashboard' icon={Layout} label='Dashboard' isCollapsed={isSidebarCollapsed} >

</SidebarLink>

<SidebarLink href='/inventory' icon={Archive} label='Inventory' isCollapsed={isSidebarCollapsed} >

</SidebarLink>
<SidebarLink href='/products' icon={Clipboard} label='Products' isCollapsed={isSidebarCollapsed} >

</SidebarLink>
<SidebarLink href='/users' icon={User} label='Users' isCollapsed={isSidebarCollapsed} >

</SidebarLink>
<SidebarLink href='/settings' icon={SlidersHorizontal} label='Settings' isCollapsed={isSidebarCollapsed} >

</SidebarLink>
<SidebarLink href='/expenses' icon={CircleDollarSign} label='Expenses' isCollapsed={isSidebarCollapsed} >

</SidebarLink>

       </div>

       {/* {FOOTER} */}

       <div className={`${isSidebarCollapsed ?"hidden":"block"} mb-10`}>
        <p className='text-center text-xs text-gray-500'>$copy:2024 Edstock</p>
       </div>
    </div>
  )
}

export default Sidebar;