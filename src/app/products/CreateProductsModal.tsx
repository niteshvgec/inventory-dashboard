import React, { ChangeEvent, FormEvent } from 'react';
import { v4 } from 'uuid';
import { useState } from 'react';
import Header from '../(components)/Header';

type ProductFormData={
    name:string;
    price:number;
    stockQuantity:number;
    rating:number;
}

type CreateProductsModalProps={
    isOpen:boolean;
    onClose:()=>void;
    onCreate:(FormData:ProductFormData)=>void;
}

const CreateProductsModal = ({
   isOpen,
    onClose,
    onCreate
}:CreateProductsModalProps) => {
    const [formData,setFormData]=useState({
        productId:v4(),
        name:"",
        price:0,
        stockQuantity:0,
        rating:0,

    })
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target;
setFormData({
    ...formData,
    [name]:name==='price'||name==='stockQuantity'||"rating"?parseFloat(value):value,

})

    }

const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    onCreate(formData);
    onClose( );
}

    if(!isOpen) return null;

    const labelCssStyles ="block text-sm font-medium text-gray-700";
    const inputCssStyles="block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>
        CreateProductsModal
        <div className='realative top-20 mx-auto p-5 border w-96 shadow-lg  rounded-md bg-white'>
<Header name="Create New Product"></Header>

<form onSubmit={handleSubmit} className='mt-5'>
    {/* PRODUCT NAME */}
    <label htmlFor='productName' className={labelCssStyles}>
Product Name
    </label>
    <input  type='text' name='name' placeholder='Name' onChange={handleChange} 
    value={formData.name}
    className={inputCssStyles}    required
     >


    </input>
    {/* PRICE */}
    <label htmlFor='productPrice' className={labelCssStyles}>
Price
    </label>
    <input  type='number' name='price' placeholder='Price' onChange={handleChange} 
    value={formData.price}
    className={inputCssStyles}
    required
     >
 </input>
 {/* StockQuantity */}
 <label htmlFor='stockQuantity' className={labelCssStyles}>
Qunatity
    </label>
    <input  type='number' name='stockQuantity' placeholder='stockQuantity' onChange={handleChange} 
    value={formData.stockQuantity}
    className={inputCssStyles}
    required
     >
 </input>

 {/* Rating */}
 <label htmlFor='rating' className={labelCssStyles}>
    Rating
 </label>
 <input
  type='number'
  name="stock Quantity"
  onChange={handleChange}
  value={formData.stockQuantity}
  className={inputCssStyles}
  required>

</input>
{/* CREATE ACTIONS */}

<button type='submit'
 className=' mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
Create
</button>

<button 
type='button'
className=' ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'
onClick={onClose}>
cancel
</button>

</form>

        </div>
        </div>
  )
}

export default CreateProductsModal;