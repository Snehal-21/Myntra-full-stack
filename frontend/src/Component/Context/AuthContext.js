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

    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem("myntrajwtToken"));
        async function getCurrentUser(){

            const response=await axios.post("http://localhost:8000/app/getCurrentUser",{token});
            if(response.data.success){
                dispatch({
                    type:"LOGIN",
                    payload:response.data.user
                })
            }
        }getCurrentUser();
    },[])

    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}

export default HandleAuthContext;