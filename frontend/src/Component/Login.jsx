import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from './Context/AuthContext';

const Login = () => {

    const [userData,setUserData]=useState({email:"",password:""});
    const {state, dispatch}=useContext(AuthContext);
    console.log(state,"State from context into login component");

    const router=useNavigate();

    const handleChange=(e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if( userData.email && userData.password){
            try {
                const response=await axios.post("http://localhost:8000/app/login",{
                    email:userData.email,
                    password:userData.password
                });
                const data=response.data;
                if(data.success){
                    dispatch({
                        type:"LOGIN",
                        payload:response.data.user
                    })
                    localStorage.setItem("myntrajwtToken",JSON.stringify(data.token));
                   
                    toast.success(data.message);
                    // router('/home');
                }
            } catch (error) {
                if(!error.response.data.success){
                    toast.error(error.response.data.message);
                    
                }
            }

        }else{
            toast.error("All fields are required.");
        }

    }
    // console.log(state);
  return (
    <div id="screen" style={{height:'100vh'}}>
    <div id="body" style={{height:'80%',width:'30%'}}>
        <div id="image">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" alt=""/>
        </div>
        <div id="signup">
            <h2>login</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="email" name='email' placeholder="Enter Email.."/>
                <input onChange={handleChange} type="password" name='password' placeholder="Enter Password.."/>
                <input  type="submit" value="Login" />
            </form>
        </div>
    </div>
</div>
  )
}

export default Login