import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function AuthProtected({ children }) {
    const { state } = useContext(AuthContext);
    const router = useNavigate();
    const [change, setChange] = useState(5);

    useEffect(() => {
        const count = setInterval(() => {
            setChange(x => x - 1);
        }, 1000);
        return () => clearInterval(count);
    }, [])


    useEffect(() => {
        if (!state?.user?.name) {
            setTimeout(() => { router('/') }, 3000)
        }
    }, [state])

    if (state?.user?.name) {
        // toast.success(state?.user?.name)
        return (
            children
        )
    } else {
        return (
            <div style={{ width: "100%", height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <div style={{ height: '300px', display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h1>To access this page you have to login...Redirection you to Home Pgae within {change} seconds</h1>
                    <button style={{ height: '40px', width: '140px', borderRadius: "10px", border: 'none', outline: 'none', color: "white", backgroundColor: 'green', marginTop: "50px" }} onClick={() => router('/login')}>Click here to Login</button>
                </div>
            </div>
        )
    }
}


export default AuthProtected;