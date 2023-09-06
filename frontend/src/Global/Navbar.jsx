import React, { useContext } from 'react';
import "../Style/navbar.css";
import { AuthContext } from '../Component/Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = () => {

    const { state, login,logout } = useContext(AuthContext);
    const router = useNavigate();
    const userName = state?.user?.name;
    const Logout = () => {
            logout({ })
            toast.success("Logout Successfull");
       
    }
    const Login = () => {
        router('/login');
    }

    return (
        <>
            <div id="screen">
                <div>
                    <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/30/913689-1.1.4-2.jpg?im=Resize=(1280,720)"
                        alt="sreen-logo" />

                </div>




                {state?.user?.role === "Buyer" ?
                    <div id="screen-tags">
                        <div>
                            <h3>MEN</h3>
                        </div>
                        <div style={{ cursor: 'pointer' }} onClick={() => router('/products')}>
                            <h3>WOMEN</h3>
                        </div>
                        <div>
                            <h3>KIDS</h3>
                        </div>
                        <div>
                            <h3>HOME & LIVING</h3>
                        </div>
                        <div>
                            <h3>BEAUTY</h3>
                        </div>
                        <div>
                            <h3>STUDIO<sup style={{ color: 'red' }}>NEW</sup></h3>
                        </div>
                    </div> :



                    <div id="screen-tags">
                        <div style={{ cursor: 'pointer' }} onClick={() => router('/addProduct')}>
                            <h3>Add Product</h3>
                        </div>
                        <div >
                            <h3>Update Product</h3>
                        </div>
                        <div>
                            <h3>Delete Product</h3>
                        </div>
                        <div>
                            <h3>STUDIO<sup style={{ color: 'red' }}>NEW</sup></h3>
                        </div>
                    </div>
                }






                <div id="screen-search">
                    <form>
                        <button type="submit"><i class="fa fa-search"></i></button>
                        <input type="text" placeholder="Search for products,brands and more" />
                    </form>
                </div>
                <div id="screen-right-tags">
                    <div >
                        <i class="fa-regular fa-user "></i>
                        {userName ? <h5>{userName}</h5> : <h5 onClick={Login}>Sign In</h5>}
                    </div>

                    <div onClick={() => router('/cart')}>
                        <i class="fa-regular fa-bag-shopping "></i>
                        <h5 style={{ paddingLeft: '5px' }}>Bag</h5>
                    </div>

                    <div onClick={Logout} id="logout">
                        <i class="fa-regular fa-heart "></i>
                        <h5>Logout</h5>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar