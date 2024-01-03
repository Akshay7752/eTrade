import React, { useReducer, useState } from 'react'
import { AllTopBar } from '../../Components/AllDropdown/AllDropdownHover'
import { AllNavBar, NavBottom } from '../../Components/AllNavbar/AllNavBar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import dataJson from '../../Data.json'

const Cart = () => {
    const [selectRadio, setselectradio] = useState("Free Shippping");
    const [cart, setCart] = useState([]);

    const initialState = {
        firstCounter: 1,
        secondCounter: 1,
        thirdCounter: 1,
    }

    const reducer = (state, action) => {
        switch (action.type) {

            case 'inc1':
                return { ...state, firstCounter: state.firstCounter + action.value }
            case 'dec1':
                return { ...state, firstCounter: state.firstCounter - action.value }

            case 'inc2':
                return { ...state, secondCounter: state.secondCounter + action.value }
            case 'dec2':
                return { ...state, secondCounter: state.secondCounter - action.value }

            case 'inc3':
                return { ...state, thirdCounter: state.thirdCounter + action.value }
            case 'dec3':
                return { ...state, thirdCounter: state.thirdCounter - action.value }

            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <section className='PAGES-DROPDOWN'>
                    <AllTopBar />
                </section>

                <section className='PAGES-NAVBAR sticky top-0 z-20'>
                    <AllNavBar />
                </section>

                <section className='PAGES-NAV-BOTTOM'>
                    <NavBottom />
                </section>

                <section className='TABLE-LIST'>
                    <div className='container mx-auto my-[100px] '>
                        <div className='flex justify-between'>
                            <h1 className="text-2xl font-semibold text-[#292930]">
                                Your Cart
                            </h1>
                            <h1 className="text-sm  text-[#3577F0]">
                                Clear Shoping Cart
                            </h1>
                        </div>

                        <div>
                            <div className="py-5 flex justify-around items-center bg-[#F6F7FB] text-[#292930] rounded-md mt-5">
                                <h1 className="text-xl font-semibold ">Product</h1>
                                <h1 className="text-xl font-semibold ml-56">Price</h1>
                                <h1 className="text-xl font-semibold mr-50">Quantity</h1>
                                <h1 className="text-xl font-semibold -mr-20">Subtotal</h1>
                            </div>

                            <div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <div className='flex items-center '>
                                        <div className=' flex justify-center items-center h-8 w-8 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  duration-300 ml-4'>
                                            <i class="fa-solid fa-xmark text-xs"></i>
                                        </div>
                                        <Link to="/ProductV1">
                                            <img className="h-20 w-20 ml-20 cursor-pointer" src="./src/assets/pages/wishlist/asset 2.png"></img>
                                        </Link>
                                    </div>
                                    <Link to="/ProductV1" className="text-xl  font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer -ml-36 duration-300">
                                        Wireless PS Handler
                                    </Link>
                                    <p className="mr-2 -ml-7 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <div className='flex items-center mr-6'>
                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  text-black duration-300' onClick={() => {
                                            if (count.firstCounter > 0) {
                                                dispatch({ type: 'dec1', value: 1 });
                                            }
                                        }}>
                                            <i class="fa-solid fa-minus text-xs"></i>
                                        </button>

                                        <h1 className='font-semibold text-lg w-14 text-center'>{count.firstCounter}</h1>

                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch({ type: 'inc1', value: 1 })}>
                                            <i class="fa-solid fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$275.00</p>
                                </div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <div className='flex items-center '>
                                        <div className=' flex justify-center items-center h-8 w-8 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  duration-300 ml-4'>
                                            <i class="fa-solid fa-xmark text-xs"></i>
                                        </div>
                                        <Link to="/ProductV2">
                                            <img className="h-20 w-20 ml-20 cursor-pointer" src="./src/assets/pages/wishlist/asset 3.png"></img>
                                        </Link>
                                    </div>
                                    <Link to="/ProductV2" className="text-xl  font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer -ml-36 duration-300">
                                        Gradient Light Keyboard
                                    </Link>
                                    <p className="mr-2 -ml-16 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <div className='flex items-center mr-6'>
                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300' onClick={() => {
                                            if (count.secondCounter > 0) {
                                                dispatch({ type: 'dec2', value: 1 });
                                            }
                                        }}>
                                            <i class="fa-solid fa-minus text-xs"></i>
                                        </button>

                                        <h1 className='font-semibold text-lg w-14 text-center'>{count.secondCounter}</h1>

                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch({ type: 'inc2', value: 1 })}>
                                            <i class="fa-solid fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$275.00</p>
                                </div>
                                <div className="flex justify-between py-4 items-center border-b-2 border-gray-100">
                                    <div className='flex items-center '>
                                        <div className=' flex justify-center items-center h-8 w-8 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  duration-300 ml-4'>
                                            <i class="fa-solid fa-xmark text-xs"></i>
                                        </div>
                                        <Link to="/ProductV3">
                                            <img className="h-20 w-20 ml-20 cursor-pointer" src="./src/assets/pages/wishlist/asset 4.png"></img>
                                        </Link>
                                    </div>
                                    <Link to="/ProductV3" className="text-xl  font-semibold text-[#292930] hover:text-[#3577F0] cursor-pointer -ml-36 duration-300">
                                        HD CC Camera
                                    </Link>
                                    <p className="mr-2 ml-7 text-gray-500 font-semibold text-xl">$124.00</p>
                                    <div className='flex items-center mr-6'>
                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300' onClick={() => {
                                            if (count.thirdCounter > 0) {
                                                dispatch({ type: 'dec3', value: 1 });
                                            }
                                        }}>
                                            <i class="fa-solid fa-minus text-xs"></i>
                                        </button>

                                        <h1 className='font-semibold text-lg w-14 text-center'>{count.thirdCounter}</h1>

                                        <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch({ type: 'inc3', value: 1 })}>
                                            <i class="fa-solid fa-plus text-xs"></i>
                                        </button>
                                    </div>
                                    <p className="mr-16 text-gray-500 font-semibold text-xl">$275.00</p>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 pt-10 gap-10'>
                            <div className='flex items-end '>
                                <div className='border-b-2 border-gray-100 pb-5 w-[100%]'>
                                    <input className='w-[100%] placeholder:text-sm placeholder:text-gray-500' type="text" placeholder='Enter coupon code' />
                                </div>
                                <button className="border rounded-lg text-base font-semibold px-9 py-5  ml-5 hover:text-white hover:bg-[#3577F0] duration-300">
                                    Apply
                                </button>
                            </div>
                            <div className='text-end '>
                                <button className="border rounded-lg text-base font-semibold px-9 py-5  hover:text-white hover:bg-[#3577F0] duration-300">
                                    Upadate Cart
                                </button>
                            </div>
                        </div>

                        <div className='FROM mt-[80px] text-[#292930] flex justify-end '>
                            <div className='bg-[#F9F3F0] rounded-md p-8 w-[35%]'>
                                <h1 className='text-xl font-semibold mb-8'>Order Summary</h1>
                                <div className='flex text-base font-semibold mb-5 border-b-2 pb-4 '>
                                    <h1 className='w-56'>Subtotal</h1>
                                    <h1>$117.00</h1>
                                </div>
                                <div className='flex text-base mb-5 border-b-2 pb-4'>
                                    <h1 className='font-semibold w-56'>Shipping</h1>
                                    <div>
                                        <ul className='leading-7'>
                                            <li><input type="radio" checked={selectRadio === "Free Shippping"} onChange={() => setselectradio("Free Shippping")}/>
                                                <label className='ml-2'>Free Shippping</label>
                                            </li>
                                            <li><input type="radio" checked={selectRadio === "Local: $35.00"} onChange={() => setselectradio("Local: $35.00")}/>
                                                <label className='ml-2'>Local: $35.00</label>
                                            </li>
                                            <li><input type="radio" checked={selectRadio === "Flat rate: $12.00"} onChange={() => setselectradio("Flat rate: $12.00")}/>
                                                <label className='ml-2'>Flat rate: $12.00</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex text-base font-semibold mb-5 border-b-2 pb-4'>
                                    <h1 className='w-56'>State Tax</h1>
                                    <h1>$8.00</h1>
                                </div>
                                <div className='flex mb-8 border-b-2 pb-4'>
                                    <h1 className='text-base font-semibold w-56'>Total</h1>
                                    <h1 className='text-xl font-bold text-[#3577F0]'>$125.00</h1>
                                </div>
                                <div className='relative text-center w-full py-5 rounded-md text-white font-bold z-10'>
                                    <Link to="/Checkout" href="" className='
                                    before:absolute
                                    before:content-[""]
                                    before:bg-[#3577F0]
                                    before:top-0
                                    before:bottom-0
                                    before:left-0
                                    before:right-0
                                    before:hover:scale-105
                                    before:duration-300
                                    before:rounded-md
                                    before:-z-10
                                      '>Process to Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='PAGES-FOOTER'>
                    <Footer />
                </section>
            </div>
        </>
    )
}

export default Cart
