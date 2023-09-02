import React, { useEffect, useState } from 'react';
import '../Style/SingleProduct.css';
import AuthProtected from './AuthProtected/Authprotected';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import api from '../Apiconfig';

const SingleProduct = () => {

    const [product,setProduct]=useState();

    const {id}=useParams();

    useEffect(()=>{
        async function getSingleProduct(){
            try {
                const response=await api.post('/getSingleMyntra',{id})
                if(response.data.success){
                    setProduct(response.data.product);
                }
            } catch (error) {
                toast.error(error.data.response.message);
            }
        }getSingleProduct();
    },[id])

  return (
    <>
        <AuthProtected>
        <div id="mainscreen">
        <div id="screen">
            <div>
                <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/30/913689-1.1.4-2.jpg?im=Resize=(1280,720)"
                    alt="sreen-logo" />

            </div>
            <div id="screen-tags">
                <div>
                    <h3>MEN</h3>
                </div>
                <div>
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
                    <h3>STUDIO<sup style={{color:'red'}}>NEW</sup></h3>
                </div>
            </div>
            <div id="screen-search">
                <form>
                    <button type="submit"><i class="fa fa-search"></i></button>
                    <input type="text" placeholder="Search for products,brands and more" />
                </form>
            </div>
            <div id="screen-right-tags">
                <div>
                    <i class="fa-regular fa-user "></i>
                    <h5 id="switch">Profile</h5>
                </div>

                <div>
                    <i class="fa-regular fa-bag-shopping "></i>
                    <h5 style={{paddingLeft:'5px'}}>Bag</h5>
                </div>
                <div id="logout">
                    <i class="fa-regular fa-heart "></i>
                    <h5>Wishlist</h5>
                </div>
            </div>
        </div>
        <div id="product-main-heading">
            <p>Home / Clothing / Men Clothing / Tshirts / <b id="name">Minions By Kook N Keech Tshirts  More By Minions
                    By Kook N Keech</b></p>
        </div>
       {product ? <div id="productmain">
            <div id="product-img">
                <div><img
                        src={product.productImage}
                        alt="img-1" /></div>
                <div><img
                        src={product.productImage}
                        alt="img-1" /></div>
                <div><img
                        src={product.productImage}
                        alt="img-1" /></div>
                <div><img
                        src={product.productImage}
                        alt="img-1" /></div>
                <div><img
                        src={product.productImage}
                        alt="img-1" /></div>
            </div>
            <div id="product-info">
                <div>
                    <h1 id="name">{product.productName}</h1>
                    {/* <p>Men Purple Boxy Fit Printed Round Neck Pure Cotton T-shirt</p> */}
                    <div>
                        <p><b>4.2 <i class="fa-solid fa-star"></i></b>| 2.8k Ratings</p>
                    </div>
                </div>


                <div>
                    <p><span id="price">₹{product.productPrice} </span><span>MRP <del>₹1099</del></span> <span> (48% OFF)</span></p>
                    <p>inclusive of all taxes</p>
                    <p><span>SELECT SIZE</span><span>SIZE CHART&nbsp;&nbsp;&nbsp;</span></p>
                    <div>
                        <div>
                            <p>S</p>
                        </div>
                        <div>
                            <p>M</p>
                        </div>
                        <div>
                            <p>L</p>
                        </div>
                        <div>
                            <p>XL</p>
                        </div>
                        <div>
                            <p>XXL</p>
                        </div>
                    </div>
                    <div id="cart">
                        <button><i class="fa-solid fa-bag-shopping"></i>ADD TO BAG</button>
                        <button><i class="fa-regular fa-heart"></i>WHISLIST</button>
                    </div>
                </div>


                <div>
                    <div>
                        <h1>DELIVERY OPTIONS<i class="fa-solid fa-truck"></i></h1>
                        <input placeholder="Enter pincode" />
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                        <div>
                            <p>100% Original Products</p>
                            <p>Pay on delivery might be available</p>
                            <p>Easy 14 days returns and exchanges</p>
                            <p>Try & Buy might be available</p>
                        </div>
                    </div>

                    <div>
                        <h1>BEST OFFERS<i class="fa-solid fa-tag"></i></h1>
                        <p>Best Price:<span>Rs.444</span></p>
                        <ul>
                            <li>Applicable on: Orders above Rs. 899(only on first purchase)</li>
                            <li>Coupon Code: <b>MYNTRA200</b></li>
                            <li>Coupon Discount: Rs.127 off(check cart for final savings)</li>
                        </ul>
                        <p class="para">View Eligible Products</p>
                        <h2>10% Instant Discount on RuPay Credit Cards</h2>
                        <ul>
                            <li>Min Spend Rs 2,000, Max Discount Rs 500.</li>
                        </ul>
                        <p class="para">Terms & Condition</p>
                        <h2>EMI option available</h2>
                        <ul>
                            <li>
                                EMI starting from Rs.27/month
                            </li>
                        </ul>
                        <p class="para">View Plan</p>
                    </div>


                    <div>
                        <h1>PRODUCT DETAILS</h1>
                        <p>Purple printed t-shirt, has a roundneck, short sleeves</p>
                        <div>
                            <h2>Size & Fit</h2>
                            <p>Boxy Fit</p>
                            <p>The model (height 6') is wearing a sixe M</p>
                        </div>
                        <div>
                            <h2>Material & Care</h2>
                            <p>1005 Cotton</p>
                            <p>Machine-Wash</p>
                        </div>
                    </div>

                    <div>
                        <h1>Specifications</h1>
                        <div>
                            <div>
                                <div>
                                    <p>Character</p>
                                    <p>Minions</p>
                                </div>
                                <div>
                                    <p>Fit</p>
                                    <p>Boxy</p>
                                </div>
                                <div>
                                    <p>Main Trend</p>
                                    <p>Graphic Print Others</p>
                                </div>
                                <div>
                                    <p>Neck</p>
                                    <p>Round Neck</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <p>Fabric</p>
                                    <p>Pure Cotton</p>
                                </div>
                                <div>
                                    <p>Length</p>
                                    <p>Regular</p>
                                </div>
                                <div>
                                    <p>Multipack Set</p>
                                    <p>Single</p>
                                </div>
                                <div>
                                    <p>Occasion</p>
                                    <p>Casual</p>
                                </div>
                            </div>
                        </div>
                        <p>See More</p>
                    </div>

                </div>



            </div>
        </div> :<div>loading....</div> }
    </div>
        </AuthProtected>
    </>
  )
}

export default SingleProduct