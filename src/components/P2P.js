import React from 'react';
import "./P2P.css";
import logoysnhlq1 from "./assets/logo_ysnhlq 1.png";
import btnbg from "./assets/btn-bg.png";
import Ellipse1 from "./assets/Ellipse 1.png";
import Vector1 from "./assets/Vector 1.png";
import Vector2 from "./assets/Vector 2.png";
import usdt from "./assets/usdt.png";
import dbas2 from "./assets/dbas2.png";
import dbas3 from "./assets/dbas3.png";
import dbas4 from "./assets/dbas4.png";
import dbas1a from "./assets/dbas1a.png";
import dbas1b from "./assets/dbas1b.png";
import dbas1c from "./assets/dbas1c.png";
import p2pg1 from "./assets/p2p-g-1.png";
import p2pg2 from "./assets/p2p-g-2.png";
import p2pg3 from "./assets/p2p-g-3.png";
import p2pg4 from "./assets/p2p-g-4.png";
import p2pg5 from "./assets/p2p-g-5.png";
import p2pg6 from "./assets/p2p-g-6.png";
import p2pg7 from "./assets/p2p-g-7.png";
import p2pg8 from "./assets/p2p-g-8.png";
import p2pg9 from "./assets/p2p-g-9.png";
import p2ph1 from "./assets/p2p-h-1.png";
import p2ph2 from "./assets/p2p-h-2.png";
import p2ph3 from "./assets/p2p-h-3.png";
import p2ph4 from "./assets/p2p-h-4.png";
import p2ph5 from "./assets/p2p-h-5.png";
import p2ph6 from "./assets/p2p-h-6.png";
import peakpx1 from "./assets/peakpx 1.png";
import Rectangle8 from "./assets/Rectangle 8.png";
// import btnbg from "./assets/btn-bg.png";
import  { useState } from 'react';

function P2P(){
    return(
        <>

{/* const [color, setColor] = useState("<button class="a">Sell</button> "); */}

<div class="p2p-main">
    <div class="bg"><img src={peakpx1}></img></div>
    
            <div class="p2p-a">
            <div class="p2p-a-nav">
                <div class="p2p-a-nav-logo">
                    <img src={logoysnhlq1}></img>
                </div>
                <div class="p2p-a-nav-div2">
                    <span class='p2p-a-nav-div2-txt'>Light Paper</span>
                    <span class='p2p-a-nav-div2-txt'>Docs</span>
                    <button>Connect Wallet</button>
                </div>
            </div>
            <div class='p2p-a-div1'>
                <span class="p2p-a-div1-line1">Arabella (ABLC)</span>
                <span class="p2p-a-div1-line2">A Dex P2P Platform.</span>
                <div class="p2p-a-div1-line3">Buy <span class="p2p-a-div1-line3-active">Arabella, BNB & BUSD</span> Coins.</div>
            </div>
            
        </div>


  

    
    <div class="p2p-main-container">

        <div class="p2p-b">
            <div class="p2p-b-div1">
            <span class="p2p-b-div1-active">ABLC</span> was built to ensure independent transfer of value between people.
            </div>
            <div class="p2p-b-div2">
            <div class="p2p-b-box-main">
                <div class="p2p-b-box1">
                    <div class="p2p-b-box1-container">
                <div class="p2p-b-box-div1">
                    <div class="p2p-b-box-div1a">
                        <span class="p2p-b-box-div1a-line1">10000</span>
                        <span class="p2p-b-box-div1a-line2">$400.00</span>
                    </div>
                    <div class="p2p-b-box-div1b">
                        <img class="p2p-b-box-div1b-img1" src={Ellipse1}></img>
                        <span>ABLC</span>
                        <img class="p2p-b-box-div1b-img2" src={Vector1}></img>
                    </div>

                </div>
                <div class="p2p-b-box-div1">
                    <div class="p2p-b-box-div1a">
                        <span class="p2p-b-box-div1a-line1">$400</span>
                        <span class="p2p-b-box-div1a-line2">=1000.00</span>
                    </div>
                    <div class="p2p-b-box-div1b">
                        <img class="p2p-b-box-div1b-img1" src={usdt}></img>
                        <span>USDT</span>
                        <img class="p2p-b-box-div1b-img2" src={Vector1}></img>
                    </div>
                    
                </div>
                <div class="p2p-b-box1-div2">
                <div class="p2p-b-box1-div2a">
                    <p>Expected Output</p>
                    <p>Price Impact</p>
                </div>
                <div class="p2p-b-box1-div2b">
                    <p>999.1458764USDT</p>
                    <span class="p2p-b-box1-div2b-txt">-0.0087</span>
                </div>
            </div>
            </div>
            
            </div>
            <div class="p2p-b-box-main-div1">
                <button class="a">Buy Order</button>
                <button>Sell Order</button>
            
            </div>
            </div>
            </div>
        </div>
<div class="p2p-c">
    <div class="p2p-c-head">
        <span class="p2p-c-head-line1 p2p-b-div1-active">Trending Exchange Pairs</span>
        <span class="p2p-c-head-line2">Analyze trending cryptocurrency exchange pairs.</span>
    </div>
    <div class="p2p-c-box">
            <div class='p2p-c-box-div1'>
                <div class="p2p-c-box-div1a"><p>Wallet ID</p></div>
                <div class="p2p-c-box-div1b"><p>Token Pair</p></div>
                <div class="p2p-c-box-div1c"><p>Base</p></div>
                <div class="p2p-c-box-div1d"><p>Quote</p></div>
                <div class="p2p-c-box-div1e"><p>TX</p></div>
            </div>
            <div class="p2p-c-box-div2">
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
                <div class="p2p-c-box-div2a">
                <div class="p2p-c-box-div1a"><p>3FZbgi29cpjq...</p><img src={Vector2}></img></div>
                <div class="p2p-c-box-div1b"><p>ABLC/BUSD</p></div>
                <div class="p2p-c-box-div1c"><p>0.00001</p></div>
                <div class="p2p-c-box-div1d"><p>0.00003</p></div>
                <div class="p2p-c-box-div1e"><button>Sell</button></div>
                </div>
            </div>
    </div>
</div>

<div class="p2p-d">
<div class="p2p-c-head">
        <span class="p2p-c-head-line1">Why Choose <span class="p2p-c-head-line2-active">ABLC?</span></span>
        <span class="p2p-c-head-line2">ABLC was built to ensure independent transfer of value between people. Just the way <span class="p2p-c-head-line2-active">Satoshi Nakamoto</span> wished.</span>
    </div>

    <div class="p2p-d-div2">
    {/* 1/////////// */}
    <div class='p2p-d-div2a'>
        <div class="p2p-d-div2a-img">
            <img src={dbas2}></img>
        </div>
        <div class="p2p-d-div2a-head">
<p>Safe and Secure</p>
        </div>
        <div class="p2p-d-div2a-para">
<p>100% secured transactions with encrypted connections.</p>
        </div>
        
    </div>
    {/* 2//////// */}
    <div class='p2p-d-div2a'>
        <div class="p2p-d-div2a-img">
            <img src={dbas3}></img>
        </div>
        <div class="p2p-d-div2a-head">
<p>Instant Exchange</p>
        </div>
        <div class="p2p-d-div2a-para">
<p>ABLC enables Crypto Enthusiasts to exchange value from their wallets.</p>
        </div>
        
    </div>
    {/* 3////////////// */}
    <div class='p2p-d-div2a'>
        <div class="p2p-d-div2a-img">
            <img src={dbas4}></img>
        </div>
        <div class="p2p-d-div2a-head">
<p>Expert Support</p>
        </div>
        <div class="p2p-d-div2a-para">
<p>We offer all the resources you need for buying and selling crypto 24/7.</p>
        </div>
        
    </div>
    {/* ////////// */}
</div>

</div>

<div class="p2p-e">
    <div class="p2p-e-div1">
<span class="p2p-e-div1-line1">Start exchanging On ABLC</span>
<span class="p2p-e-div1-line2">Connect you wallet now to immediately start buying or selling Crypto, hassle-free.</span>
    </div>
    <div class='p2p-e-div2'>
<button>Connect Wallet</button>
    </div>
</div>

<div class="p2p-d">
<div class="p2p-c-head">
        <span class="p2p-c-head-line1">What Can You Do With <span class="p2p-c-head-line2-active">ABLC?</span></span>
        <span class="p2p-c-head-line2">Elevate your financial freedom to a higher plane with ABLC.</span>
    </div>

    <div class="p2p-f-div2">
    {/* 1/////////// */}
    <div class='p2p-f-div2a'>
        <div class="p2p-f-div2a-img">
            <img src={dbas1a}></img>
        </div>
        <div class="p2p-f-div2a-head">
<p>Buy Crypto Online</p>
        </div>
        <div class="p2p-f-div2a-para">
<p>Buy Crypto directly into your from the ABLC platform.</p>
        </div>
        
    </div>
    {/* 2//////// */}
    <div class='p2p-f-div2a'>
        <div class="p2p-f-div2a-img">
            <img src={dbas1b}></img>
        </div>
        <div class="p2p-f-div2a-head">
<p>Sell Crypto Anytime</p>
        </div>
        <div class="p2p-f-div2a-para">
<p>Sell your Crypto at your rate, and get paid in one of numerous methods.</p>
        </div>
        
    </div>
    {/* 3////////////// */}
    <div class='p2p-f-div2a'>
        <div class="p2p-f-div2a-img">
            <img src={dbas2}></img>
        </div>
        <div class="p2p-f-div2a-head">
<p>Secure Escrow</p>
        </div>
        <div class="p2p-f-div2a-para">
<p>Our Secure Escrow system protects users to ensure seamless exchange of value.</p>
        </div>
        
    </div>
        {/* 4////////////// */}
        <div class='p2p-f-div2a'>
        <div class="p2p-f-div2a-img">
            <img src={dbas1c}></img>
        </div>
        <div class="p2p-f-div2a-head">
<p>Non-custodial</p>
        </div>
        <div class="p2p-f-div2a-para">
<p>WYou are in charge of your funds! Buy and Sell directly from your wallets and be on your way!</p>
        </div>
        
    </div>
    {/* ////////// */}
</div>

</div>

<div class="p2p-d">
<div class="p2p-c-head">
        <span class="p2p-c-head-line1">Don’t take our word for it.</span>
        <span class="p2p-c-head-line1 p2p-c-head-line2-active">Trust our Customers.</span>
    </div>

    <div class="p2p-g">
        <div class="p2p-g1">
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg1}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">James_BTC</span>
                            <span class="p2p-g1-box-div1-line2">@j_btc</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">ABLC is my first Crypto experience. Started as your regular newbie first time Crypto buyer - asking legacy traders what is a wallet and why I need to follow verification.</span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* 2 */}
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg4}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">florida_cake</span>
                            <span class="p2p-g1-box-div1-line2">@fcnft</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">In this exclusive interview our head of PR explains what forces push
the crypto exchange platform industry forward.</span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* 3 */}
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg7}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">muffin_kitty</span>
                            <span class="p2p-g1-box-div1-line2">@imuffin</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">ABLC has created a benchmark in cryptocurrency swap service.
makes them one of the most convenient places to buy cryptos. Not
only is ABLC safe, it is fast and efficient. It is more secure than most
centralized cryptocurrency exchanges since it does not keep your
funds. ABLC has created a benchmark in cryptocurrency swap.
This makes them one of the most convenient places to buy cryptos.
Not only is ABLC safe, it is fast and efficient. It is more secure than
most centralized cryptocurrency exchanges since it does not keep
your funds.  </span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* / */}
        </div>
        <div class="p2p-g1">
        <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg2}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">bored_ape_ultra</span>
                            <span class="p2p-g1-box-div1-line2">@ultrabored</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">ABLC has created a benchmark in cryptocurrency swap service.
makes them one of the most convenient places to buy cryptos. Not
only is ABLC safe, it is fast and efficient. It is more secure than most
centralized cryptocurrency exchanges since it does not keep your
funds. ABLC has created a benchmark in cryptocurrency swap.
This makes them one of the most convenient places to buy cryptos.
Not only is ABLC safe, it is fast and efficient. It is more secure than
most centralized cryptocurrency exchanges since it does not keep
your funds.  </span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* 2 */}
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg5}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">kingzzzyy</span>
                            <span class="p2p-g1-box-div1-line2">@kingz</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">ABLC is my first Crypto experience. Started as your regular newbie
first time Crypto buyer - asking legacy traders what is a wallet and
why I need to follow verification.</span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* 3 */}
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg8}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">adventure_time</span>
                            <span class="p2p-g1-box-div1-line2">@appe</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">In this exclusive interview our head of PR explains what forces push
the crypto exchange platform industry forward.</span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* / */}
        </div>
        <div class="p2p-g1">
        <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg3}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">the_cm_punk</span>
                            <span class="p2p-g1-box-div1-line2">@c_punk</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">ABLC has created a benchmark in cryptocurrency swap service.
makes them one of the most convenient places to buy cryptos. Not
only is ABLC safe, it is fast and efficient. It is more secure than most
centralized cryptocurrency exchanges since it does not keep your
funds. ABLC has created a benchmark in cryptocurrency swap.
This makes them one of the most convenient places to buy cryptos.
Not only is ABLC safe, it is fast and efficient. It is more secure than
most centralized cryptocurrency exchanges since it does not keep
your funds.  </span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* 2 */}
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg6}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">golden_boi</span>
                            <span class="p2p-g1-box-div1-line2">@boygolden</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">In this exclusive interview our head of PR explains what forces push
the crypto exchange platform industry forward.</span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* 3 */}
            <div class="p2p-g1-box">
                <div class="p2p-g1-box-container">
                    <div class="p2p-g1-box-div1">
                        <img src={p2pg9}></img>
                        <div class="p2p-g1-box-div1-txt">
                            <span class="p2p-g1-box-div1-line1">alexander_rome</span>
                            <span class="p2p-g1-box-div1-line2">@3dnftts</span>
                        </div>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">ABLC is my first Crypto experience. Started as your regular newbie
first time Crypto buyer - asking legacy traders what is a wallet and
why I need to follow verification.</span>
                    </div>
                    <div class="p2p-g1-box-div1">
                        <span class="p2p-g1-box-div1-line2">06th Jan ●   9:40</span>
                    </div>
                    
                </div>
            </div>
            {/* / */}
        </div>
    </div>

<div class="p2p-g-button">
    <button>Read More</button>
</div>
</div>

<div class="p2p-h">
    <div class="p2p-h-div1">
    <div class="p2p-h-div1a">
        <p>Fees</p>
        <p>Terms of Services</p>
        <p>Contact Us</p>
        <p>Create an Offer</p>
    </div>
    <div class="p2p-h-div1b">
            <p>Any inquires for ABLC - Contact <span class='p2p-h-div1b-active'>p2pablc@ablc.io</span></p>
    </div>
    </div>
    <div class="p2p-h-div2">
            <img src={p2ph1}></img>
            <img src={p2ph2}></img>
            <img src={p2ph3}></img>
            <img src={p2ph4}></img>
            <img src={p2ph5}></img>
            <img src={p2ph6}></img>
    </div>
</div>
    </div>
</div>
        </>
    )
};
export default P2P;
