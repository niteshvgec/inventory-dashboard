
"use client";
import React from 'react'
import Header from '../(components)/Header';
import { DataGrid ,GridColDef} from '@mui/x-data-grid';
import { useGetUsersQuery } from '../state/api';

const columns:GridColDef[]=[
{field:"userId",headerName:"ID",width:90},
{field:"name",headerName:"Name",width:200},
{field:"email",headerName:"Email",width:200},
]

const Users = () => {

const {data:users,isError,isLoading}=useGetUsersQuery();
console.log("hibitehs",users);

if(isLoading){
    return <div className='py-4'>Loading...</div>
}
if(isError || !users){
    return (
        <div className='text-center text-red-500 py-4'>
Failed to fetch product
        </div>
    )
}

  return (
    <div className='flex flex-col'>
    <Header name="Users"></Header>
    <DataGrid 
    rows={users}
    columns={columns}
    getRowId={(row)=>row.userId}
    checkboxSelection
    className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'
    ></DataGrid>

    </div>
  )
}
export default Users;