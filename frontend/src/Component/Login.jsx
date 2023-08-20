import React from 'react';
import '../Style/Login.css';

const Login = () => {
  return (
    <div id="screen">
    <div id="body">
        <div id="image">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/9d70554f-0a7d-49f1-a063-4c32800a9bfd1675792560640-offer-banner-400-600x240-code-_-MYNTRA300.jpg" alt="image"/>
        </div>
        <div id="signup">
            <h2>login</h2>
            <form onsubmit="login(event)">
                <input type="email" id="lemail" placeholder="Enter Email.."/>
                <input type="password" id="lpass" placeholder="Enter Password.."/>
                <input  type="submit" value="Login" />
            </form>
        </div>
    </div>
</div>
  )
}

export default Login