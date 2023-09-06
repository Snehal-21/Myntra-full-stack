import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContext=createContext();

const intialState={user:null};

const reducer =(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            localStorage.removeItem("myntrajwtToken");
            toast.success("Logout successful")
            return {...state,user:null}
        default:
            return state;
    }
}

//higher order function
const HandleAuthContext=({children})=>{
    const [state,dispatch]=useReducer(reducer,intialState);

    const login =(userData)=>{
        if(userData.token){
            localStorage.setItem("myntrajwtToken",JSON.stringify(userData.token));
        }
        dispatch({
            type:"LOGIN",
            payload:userData.payload
        })
    }
    
    const logout=()=>{
        localStorage.removeItem("myntrajwtToken");
        dispatch({
            type:"LOGOUT"
        })
    }

    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem("myntrajwtToken"));
        async function getCurrentUser(){
            if(token){
            const response=await axios.post("http://localhost:8000/app/getCurrentUser",{token});
            if(response.data.success){
                dispatch({
                    type:"LOGIN",
                    payload:response.data.user
                })
            }
        }
        }getCurrentUser();
    },[])

    return(
        <AuthContext.Provider value={{state, login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default HandleAuthContext;