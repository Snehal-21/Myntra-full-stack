import React from 'react';
import '../Style/Register.css';

const Register = () => {
  return (
    <div id="screen">
    <div id="body">
        <div id="image">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" alt="image"/>
        </div>
        <div id="signup">
            <h2>Signup</h2>
            <form onsubmit="signup(event)">
                <input type="text" id="mname" placeholder="Enter Name.."/>
                <input type="email" id="memail" placeholder="Enter Email.."/>
                <input type="password" id="mpass" placeholder="Enter Password.."/>
                <input type="password" id="mconfirmpass" placeholder="Enter Confirm Password.."/>
                <input  type="submit" value="Sign Up" />
            </form>
        </div>
    </div>
</div>
  )
}

export default Register