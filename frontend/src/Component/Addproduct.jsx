import React, { useState } from 'react';
import toast from "react-hot-toast";
import api from '../Apiconfig';
// import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
    const [userData,setUserData]=useState({productName:"",productPrice:"",productImage:""})
    // const router=useNavigate();
    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(userData.productName && userData.productPrice && userData.productImage){
            try {
                const response=await api.post("/addMyntra",{
                    productName:userData.productName,
                    productPrice:userData.productPrice,
                    productImage:userData.productImage
                });
                const data=response.data;
                if(data.success){
                    toast.success(data.message);
                    // router('/login');
                }
            } catch (error) {
                if(!error.response.data.success){
                    toast.error(error.response.data.message);
                }
            }
        }else{
            toast.error("All fields are required.")
        }
    }

  return (
    <>
     <div id="screen" style={{height:'100vh'}}>
    <div id="body" style={{height:'50%',width:'30%'}}>
        <div id="signup">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="productName" placeholder="Enter Product Name.."/>
                <input onChange={handleChange} type="text" name='productPrice' placeholder="Enter Product Price"/>
                <input onChange={handleChange} type="text" name='productImage' placeholder="Enter Product Image"/>
                <input style={{color:'white',backgroundColor:"blue",marginTop:"30px"}}  type="submit" value="Add Product" />
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Addproduct