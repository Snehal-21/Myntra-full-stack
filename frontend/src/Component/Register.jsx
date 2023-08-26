import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../Style/Register.css";

const Register = () => {

    const [userData,setUserData]=useState({name:"",email:"",password:"",confirmpassword:""});
    const router=useNavigate();

    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmpassword){
            try {
                const response=await axios.post("http://localhost:8000/app/register",{
                    name:userData.name,
                    email:userData.email,
                    password:userData.password,
                    confirmpassword:userData.confirmpassword
                });
                const data=response.data;
                if(data.success){
                    toast.success(data.message);
                    router('/login');
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
    <div id="screen" style={{height:'100vh'}}>
    <div id="body" style={{height:'80%',width:'30%'}}>
        <div id="image">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" alt=""/>
        </div>
        <div id="signup">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" placeholder="Enter Name.."/>
                <input onChange={handleChange} type="email" name='email' placeholder="Enter Email.."/>
                <input onChange={handleChange} type="password" name='password' placeholder="Enter Password.."/>
                <input onChange={handleChange} type="password" name='confirmpassword' placeholder="Enter Confirm Password.."/>
                <input  type="submit" value="Sign Up" />
            </form>
        </div>
    </div>
</div>
  )
}

export default Register