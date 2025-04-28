"use client";
import React, { useState } from 'react';
import Header from '../(components)/Header';

type UserSetting={

    label:string;
    value:string|boolean;
    type:"text"|"toggle";

};

const mockSettings:UserSetting[]=[
    { label:"USername",value:"john_doe",type:"text"},
    {label:"Email",value:"john.doe@example.com",type:"text"},
    {label:"Notification",value:"false",type:"toggle"},
    {label:"Language",value:"English",type:"text"}
]
const Settings = () => {
    const [userSettings,setUserSettings]=useState<UserSetting[]>(mockSettings);

    const handleToggleChange=(index:number)=>{
        const settingsCopy=[...userSettings];
        settingsCopy[index].value=!settingsCopy[index].value as boolean;
        setUserSettings(settingsCopy);
 }

  return (
    <div className='w-full'>
        <Header name="User Settings"></Header>
<div className='overflow-x-auto mt-5 shadow-md'>
<table className='min-w-full bg-white rounded-lg'>

    <thead className='bg-gray-800 text-white'>
        <tr>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>

                Setting
            </th>
            <th className='text-left py-3 px-4 uppercase font-semibold text-sm'>
Value
</th>

        </tr>
    </thead>
    <tbody>
        {
        userSettings.map((Setting,index)=>(
           
<tr className='hover:bg-blue-50' key={Setting.label}>

    <td className='py-2 px-4 '>{Setting.label}</td>
    <td className='py-2 px-4'>{Setting.type==="toggle"?(<label className='inline-flex relative items-center cursor-pointer'>


        <input type='checkbox' className='sr-only peer' checked={Setting.value as boolean} onChange={()=>handleToggleChange(index)}></input>
        <div
        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-400 peer-focus:ring-4 
        transition peer-checked:after:translate-x-full peer-checked:after:border-white 
         after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
         after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
         peer-checked:bg-blue-600"
                      ></div>
    </label>):(<input  type='text'
    className='px-4 py-2 border rounded-lg text-gray-500 focus:outline-none focus:border-blue-500'
   value={Setting.value as string} 
   onChange={(e)=>{
    const settingCopy=[...userSettings];
    settingCopy[index].value=e.target.value;
    setUserSettings(settingCopy);
   }}

   >
    </input>)}</td>
</tr>

            
        ))
        
        }
    </tbody>
</table>

</div>


    </div>
  )
}

export default Settings;