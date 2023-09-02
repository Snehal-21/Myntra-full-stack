import React, { useContext } from 'react';
import '../Style/Home.css';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const { state,dispatch } = useContext(AuthContext);
    const router=useNavigate();
    const userName=state?.user?.name;
    const Logout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
    const Login=()=>{
        router('/login');
    }
    return (
        <>
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
                        <div style={{ cursor: 'pointer' }} onClick={()=>router('/products')}>
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
                    </div>
                    <div id="screen-search">
                        <form>
                            <button type="submit"><i class="fa fa-search"></i></button>
                            <input type="text" placeholder="Search for products,brands and more" />
                        </form>
                    </div>
                    <div id="screen-right-tags">
                        <div >
                            <i class="fa-regular fa-user "></i>
                            {userName?<h5>{userName}</h5>:<h5 onClick={Login}>Sign In</h5>}
                        </div>

                        <div>
                            <i class="fa-regular fa-bag-shopping "></i>
                            <h5 style={{ paddingLeft: '5px' }}>Bag</h5>
                        </div>

                        <div onClick={Logout} id="logout">
                            <i class="fa-regular fa-heart "></i>
                            <h5>Logout</h5>
                        </div>
                    </div>
                </div>
                <div id="slider">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg"
                        alt="slider" />
                </div>
                <div class="dealhead">
                    <h1>DEAL OF THE DAY</h1>
                </div>
                <div id="dealinfo">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/44a9b614-4f67-4b5a-89e5-ee50f7d5f8681676819472882-HRX_Activewear_Min_65_off.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/ea799980-8939-4dc3-8bbe-72b3f63ab8e31676819472832-Casual_Shoes_Min_40_Off.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/06d56cbf-0135-426a-a81a-b637c6f30dac1676819472817-Campus-_Highlander_Starting_499_1299.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/216f9bdf-e348-4e9d-b108-f22ceafbf4911676819472966-Starting_1299_2499.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/6ecb87f9-bd94-4c0a-a64b-4692197d6be21676819472939-Roadster-_Here_-_Now_-_more___Flat_70_off.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/18e8fbf9-7702-4f58-95a4-7cdb69850e641676819472892-Mango_Man-_Levi-s-____Flat_50_off.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/d3ab2a84-91c5-4137-b3b3-807b540bcc531676819472859-H-M-_USPA___STarting_399.png"
                            alt="deal-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/cd86754f-29cc-4a42-b8f1-bce7218493031676819472927-Puma-_Nike_-_more_-min_40_off.png"
                            alt="deal-1" />
                    </div>
                </div>
                <div class="dealhead">
                    <h1>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
                </div>
                <div id="bestinfomain">
                    <div id="bestinfo">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/745cec57-af58-4ba6-8ae1-a3ccbe7c54e91644407437930-Lingerie_-_Loungewear_-_DB-_ETC.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg"
                                alt="best-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg"
                                alt="best-1" />
                        </div>
                    </div>
                </div>
                <div class="dealhead">
                    <h1>TOP PICKS</h1>
                </div>
                <div id="toppicksinfo">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
                            alt="top-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg"
                            alt="top-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg"
                            alt="top-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg"
                            alt="top-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg"
                            alt="top-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg"
                            alt="top-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"
                            alt="top-1" />
                    </div>
                </div>
                <div class="dealhead">
                    <h1>CATEGORIES TO BAG</h1>
                </div>
                <div id="baginfo">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"
                            alt="bag-1" />
                    </div>
                </div>
                <div id="baginfo2">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"
                            alt="bag-1" />
                    </div>
                </div>
                <div id="baginfo2" class="baginfo2-2">
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
                            alt="bag-1" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"
                            alt="bag-1" />
                    </div>
                </div>
                <div class="dealhead">
                    <h1>DEALS ON TOP BRANDS</h1>
                </div>
                <div id="brandhead">
                    <div id="brandinfo">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg"
                                alt="brand-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png"
                                alt="brand-1" />
                        </div>
                    </div>
                </div>
                <div class="dealhead">
                    <h1>BRANDS AT SLASHED PRICES</h1>
                </div>
                <div id="slashedhead">
                    <div id="slashedinfo">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/8cd7ec33-78fe-4b40-802d-365238b1376e1644475927229-Sangria.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/5809282f-372d-4881-a8dc-95d5958a86be1644338988944-Roadster_HP.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/8/e96d85b8-7a62-4f57-898a-6c291ffb4d7f1644339048429-HRX_HP.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/e8546602-b217-45b0-a2d4-9469ba59938f1644475927176-Chemistry.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/3cbf365e-8027-4aed-859b-6d40886418d21644475927244-Anouk--1-.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/af85f560-cd67-469a-8405-4ec64a33f9971644475927251-Dressberry.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/a0be607a-142c-4433-90ad-d13f22148f111644475927161-All-about-you.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/b55aac85-4eb7-44d0-94bb-5077e8da70001644475927183-House-of-Pataudi.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/f3120cb8-1af3-40fa-b7ed-02466eb03def1644475927205-Kook-N-Keech.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/83ac07a7-65b3-4ede-a434-d9e3d103e3591644475927220-Moda-Rapido_1.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fa16e2c8-d5af-4d71-8dfb-14484fd0db811644475927213-Moda-Rapido_2.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/40ddc119-a9bd-4117-ad8b-fc5bcc6a09141644475927190-ether.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/4900ccb0-86be-4fa4-806e-9cad9496e3db1644475927196-INVICTUS.jpg"
                                alt="slashed-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/10/fdbf3336-1777-46fd-aff6-7786268bc0d71644475927169-Harvard.jpg"
                                alt="slashed-1" />
                        </div>
                    </div>
                </div>
                <div class="dealhead">
                    <h1>BEST BUYS</h1>
                </div>
                <div id="buyshead">
                    <div id="buysinfo">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/420ebd43-1270-4954-bad6-e9e50b52384d1645602339422-Heels.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/32f343c6-74e1-45c3-9923-8e161b484a641645602339538-Tops.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/90867e68-f373-4e21-a3ac-bbbb4f199c7f1645602339404-Flats.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c62327cb-acc8-436b-9350-ac52c86719dd1645602339517-Sports-Shoes.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/1908b009-5fed-4681-add0-62c8a838b72e1645602339504-Shorts.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c8946606-d520-4ba6-a9df-2e6a6ad70fe91645602339490-Sarees.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/4d7c5595-b7be-42a4-8640-d66d65bd0a2d1645602339441-Innerwear.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b3fa47d6-deba-4568-b49c-1e406bd09ae61645602339531-Sweaters_M.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/9fb1cb10-a734-4457-9f59-58abc3bab3631645602339477-Makeup-Essentials.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/6b063e28-1fe4-410c-852b-a932a2c7252d1645602339462-Lingerie.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/907cd30b-caa9-4030-9e6f-c015cfbb9ffa1645602339382-Belts-_-Wallets.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/1cde2cbb-f762-40a4-bdc1-eadfb7616d841645602339410-Formal-Shoes.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/e18662fa-fe65-437b-b385-71b31cd10f021645602339470-Loungewear.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5be435fa-3b6d-4b07-9394-70ee808fb6fa1645602339448-Kurtas-_-Sets.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/a2637231-0f57-4f0e-b25b-b36f8914d1f91645602339554-T-Shirts-1.jpg"
                                alt="buys-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/989dd7d1-f411-496a-8c44-88d5fef68d611645602339546-T-Shirts.jpg"
                                alt="buys-1" />
                        </div>

                    </div>
                </div>
                <div class="dealhead">
                    <h1>MYNTRA LUXE</h1>
                </div>
                <div id="luxehead">
                    <div id="luxeinfo">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/8c07792e-bbf9-4935-8d9c-3a6a66eba4f01636726166240-HP-DKNY.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/1cbf16e3-afe2-4013-af4d-4e427f1e30ee1636726166266-HP-Junghans.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/98b141e0-8d71-4e1b-8afa-49d1b7113a141636726166278-HP-Luxe.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/35f5db21-a813-4c1a-81e4-7ca2bc5a08351636726166290-HP-Oris.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/9c262136-abbd-4087-9267-bc1f3b90b3c01636726166303-HP-RaymondWeil.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/5158cd92-89b5-452e-97c5-938bdf63516e1636726166284-HP-Movado.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/a9d39733-2022-4964-8c22-6c9e43d8502a1636726166259-HP-Hackett.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/585ac7b3-36e3-4964-8707-a2249df2b1291636726166319-HP-versace.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/4fac3c61-9e54-486c-a083-6f61df81436c1623933299972-HPCarouselVisibility-MyntraLuxe-Tissot.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/65d5107e-35cf-4176-aef3-b7ae77dd09761636726166252-HP-FredPerry.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/9b04f96a-f1ed-4edc-8840-483719055fdb1623940080549-HPCarouselVisibility-MyntraLuxe-ExploreStore.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/6eaf8591-e92b-4ab3-a4e5-f38caac6c7d91636726166295-HP-POLORalphLauren.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/adf54639-1714-4935-8d22-ceef8ef1d8d31623940080665-HPCarouselVisibility-TheCollective-ExploreStore.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/7e273a5a-9372-4956-af96-38aa903668201636726166272-HP-KarlLagerfeld.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/bfa35f05-88b3-419f-af88-83c2ea0483f91623933299966-HPCarouselVisibility-MyntraLuxe-Tedbaker.jpg"
                                alt="luxe-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/884c0181-9da3-43c4-89f5-8696b97ec7751636726166246-HP-Dyson.jpg"
                                alt="luxe-1" />
                        </div>
                    </div>
                </div>
                <div class="dealhead">
                    <h1>GIFTING CARDS</h1>
                </div>
                <div id="cardhead">
                    <div id="cards">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/22/22b3c59a-fa16-434d-b2e1-d8779f1abe871661164884892-Gift-Card-Banner.png"
                                alt="card-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/ef1e7c6b-bec4-471c-9c36-72fffd975c0c1636738225251-happy-wedding.jpg"
                                alt="card-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg"
                                alt="card-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg"
                                alt="card-1" />
                        </div>
                    </div>
                    <div id="cardinfo">
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/17209d4a-6c5e-4ba7-8d12-77b77dd3d04f1647340317606-SS22-KeyHighlights-Homedecor.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/6f5ef7a2-3562-4221-8f89-f7dd6c157bd31647340281629-SS22-KeyHighlights-TommyHilfiger.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/c3792c79-967a-4d54-9cde-963e86defe331647340317589-SS22-KeyHighlights-F21.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/042e2643-e1af-435b-8e20-1afcbc171b3e1647340281452-SS22-KeyHighlights-Forever21.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/d48d0786-3f7c-4124-83a7-e414bc3ccd021647340317640-SS22-KeyHighlights-ModaRapido.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/3/348b6eba-104d-472e-90d3-a29cf315b9ed1646296933371-FirstonMyntra-Men-Campus.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/bb442c92-90d4-4c5e-99c3-aa5bf5a5dbae1647340391242-SS22-KeyHighlights-Women-ForeverNew.jpg"
                                alt="cardsinfo-1" />
                        </div>
                        <div>
                            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/15/2ecfa799-6de6-425f-8578-3c59986d28951647340317709-SS22-KeyHighlights-Zeneme.jpg"
                                alt="cardsinfo-1" />
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
                <div id="sidebutton">
                    <p>FLAT ₹200 OFF <i class="fa-solid fa-play"></i></p>
                </div>
                <div id="sidecircle">
                    <div><i class="fa-regular fa-bell"></i></div>
                </div>
            </div >
        </>
    )
}

export default Home