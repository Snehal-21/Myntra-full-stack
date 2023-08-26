import React from 'react';
import '../Style/Cart.css';

const Cart = () => {
  return (
    <>
     <div id="mainscreen">
        <div id="navbar">
            <div>
                <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/30/913689-1.1.4-2.jpg?im=Resize=(1280,720)"
                    alt="myntra-logo" />
            </div>
            <div>
                <div>
                    <p><u>BAG</u></p>
                </div>
                <div></div>
                <div>
                    <p>ADDRESS</p>
                </div>
                <div></div>
                <div>
                    <p>PAYMENT</p>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
                        alt="" />
                    <p>100% SECURE</p>
                </div>
            </div>
        </div>
        {/* <div id="cartbody">
            <div id="cartleft">
                <div>
                    <p>Check delivery time & services</p>
                    <button>ENTER PIN CODE</button>
                </div>
                <div>
                    <p><i class="fa-solid fa-certificate"></i>Available Offers (2)</p>
                    <p>10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs 3,000.TCA</p>
                    <div>
                        <div> <p>Show More</p></div>
                        <div><select></select></div>
                    </div>
                </div>
                <div>
                    <p><i class="fa-solid fa-truck"></i> Yay! <span>NO convenience fee</span> on this order.</p>
                </div>
                <div>
                    <input type="checkbox" checked/>
                    <p>1/1 ITEMS SELECTED</p>
                    <button>REMOVE</button>
                    <div></div>
                    <button>MOVE TO WHISHLIST</button>
                </div>
                <div id="cartbody">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="cart-image"/>
                    </div>
                    <div>
                        <h1>HERE&NOW</h1>
                        <p>HERENOW Men Navy Polo Collar Cotton Pure Cotton T-shirt</p>
                        <p>Sold by:Omnitech Retail</p>
                        <div>
                            <button>Size:M<i class="fa-solid fa-caret-down"></i></button>
                            <button>Qty:1<i class="fa-solid fa-caret-down"></i></button>
                        </div>
                        <p>Rs 779 <del>Rs.1299</del><span> 40%OFF</span></p>
                        <p><i class="fa-solid fa-rotate-left"></i><b>14 days</b> Return available</p>
                    </div>
                    <div><i class="fa-solid fa-xmark"></i></div>
                </div>
                <div>
                    <p><i class="fa-regular fa-file-lines"></i>Add More From Wishlist<span></span></p>
                </div>
            </div>
            <div id="cartright">
                <div>
                    <p>COUPONS</p>
                    <div>
                        <p><i class="fa-solid fa-tag"></i> Apply Coupons</p>
                        <button>APPLY</button>
                    </div>
                </div>

                <div>
                    <p>GIFTING & PERSONALISATION</p>
                <div>
                   <div>
                    <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="gift-img"/>
                   </div>
                   <div>
                    <p>Buying for a loved one?</p>
                    <p>Gift wrap and personalised message on card, Only for <span>Rs.25</span></p>
                    <p>ADD GIFT WRAP</p>
                   </div>
               </div>
                </div>

                <div>
                    <p>PRICE DETAILS <span>(1 Item)</span></p>
                    <div>
                        <div>
                            <p>Total MRP</p>
                            <p>Discount on MRP</p>
                            <p>Coupon Discount</p>
                            <p>Convenience Fee<span>Know More</span></p>
                        </div>
                        <div>
                            <p>Rs.1,299</p>
                            <p>-Rs.520</p>
                            <p>APPLY Coupon</p>
                            <p><del>Rs.99</del> FREE</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div><p>Total Amount</p></div>
                    <div><p>Rs.779</p></div>
                </div>
                <button>PLACE ORDER</button>

            </div>
        </div>  */}
        <div class="cartSection">
            <div id="leftCart" class="leftCart">
                 <div class="innerCart">
                    <div class="prodImage">
                        <div class="prodImagePos">
                            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg" alt="" />
                        </div>
                    </div>
                    <div class="prodDesc">
                        <h1 style={{fontSize:'18px'}}>HERE&NOW</h1>
                        <p style={{fontSize:'16px'}}>HERENOW Men Navy Polo Collar Cotton Pure Cotton T-shirt</p>
                        <p style={{fontSize:'14px'}}>Sold by:Omnitech Retail</p>
                        <div>
                            <button>Size:M<i class="fa-solid fa-caret-down"></i></button>
                            <button>Qty:1<i class="fa-solid fa-caret-down"></i></button>
                        </div>
                        <p style={{fontSize:'14px'}} class="prodPrice">Rs 779 <del>Rs.1299</del><span> 40%OFF</span></p>
                        <p style={{fontSize:'16px'}} class="prodReturn"><i class="fa-solid fa-rotate-left"></i><b>14
                                days</b> Return available</p>
                    </div>
                </div> 
            </div>
        </div>
        <div class="rightCart"></div>
    </div>

    <div id="cartimages">
        <hr/>
        <p>You may also like:</p>
        <div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/7546902/2019/2/11/be44366c-a232-47ec-a7b4-c4bea24f04e71549886561293-HERENOW-Men-Teal-Solid-Polo-Collar-T-shirt-7371549886559966-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>HERE&NOW</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/9329615/2019/8/5/cd510b7d-6f69-4659-84ac-6a778a98f5ab1564990148742-Roadster-Men-Tshirts-9551564990146955-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Roadster</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/9242693/2019/7/5/e6d715fb-854b-4ad4-a057-fed4a89109ca1562331396987-Roadster-Men-Tshirts-41562331395362-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Roadster</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/4318091/2019/5/8/c0e24a77-4369-42ae-98c4-b583e5375dbf1557297643554-HERENOW-Men-White--Coral-Pink-Colourblocked-Polo-Collar-T-sh-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>HERE&NOW</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/4149433/2019/1/24/78c99765-1e77-4b5e-853a-d22c950fabdc1548331051631-Mast--Harbour-Men-Coral-Pink-Striped-Polo-Collar-T-shirt-530-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Mast & Harbour</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/2337637/2018/2/8/11518089132423-Roadster-Men-Black-Solid-Polo-Collar-T-shirt-9911518089132200-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Roadster</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/2521204/2018/2/26/11519626464547-na-8991519626464330-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>FIDO DIDO</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/8023755/2019/2/28/3ccf7a01-9e78-409d-b357-70fffc8bfc251551339061011-Roadster-Men-Tshirts-7841551339059830-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Roadster</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/9108635/2019/5/29/f8119930-bd75-44f7-9b52-a62c768a0e9c1559131297920-Roadster-Men-Blue-Striped-Polo-Collar-T-shirt-51415591312966-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Roadster</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
            <div>
                <img src="https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/2303676/2018/2/12/11518434518187-Roadster-Men-Green-Solid-Polo-Collar-T-shirt-8851518434517943-1.jpg"
                    alt="cart-img" />
                <div>
                    <h1>Roadster</h1>
                    <p>Polo Collar Cotton</p>
                    <p><span>Rs 1019 </span><span>Rs.<del>1699</del></span><span> (40% OFF)</span></p>
                </div>
                <p>ADD TO BAG</p>
            </div>
        </div>
    </div>

    <div id="footer">
        <div id="mainfooter">
            <div id="footer-1">
                <h1 class="footerhead">ONLINE SHOPPING</h1>
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
                <p>Home & Living</p>
                <p>Beauty</p>
                <p>Gift Cards</p>
                <p>Myntra Insider</p>
                <h1 class="footerhead">USEFUL LINKS</h1>
                <p>Blog</p>
                <p>Careers</p>
                <p>Site Map</p>
                <p>Corporate Information</p>
                <p>Whitehat</p>
            </div>
            <div id="footer-2">
                <h1 class="footerhead">CUSTOMER POLICIES</h1>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>T&C</p>
                <p>Terms Of Use</p>
                <p>Track Orders</p>
                <p>Shipping</p>
                <p>Cancellation</p>
                <p>Returns</p>
                <p>Privacy POlicy</p>
                <p>Grievance Officer</p>
            </div>
            <div id="footer-3">
                <h1 class="footerhead">EXPERIENCE MYNTRA APP ON MOBILE</h1>
                <div id="play-stores">
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                            alt="play-1" />
                    </div>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                            alt="play-1" />
                    </div>
                </div>
                <h1 class="footerhead">KEEP IN TOUCH</h1>
                <div id="touchicons">
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                            alt="toch-1" />
                    </div>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                            alt="toch-2" />
                    </div>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                            alt="touch-3" />
                    </div>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                            alt="touch-4" />
                    </div>
                </div>
            </div>
            <div id="footer-4">
                <div>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                            alt="f00ter-4" />
                    </div>
                    <div>
                        <p><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                            alt="f00ter-4" />
                    </div>
                    <div>
                        <p><b>Return within 30 days</b> of receiving your order</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Cart;