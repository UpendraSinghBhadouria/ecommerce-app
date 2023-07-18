import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decreaseCart, getTotal, removeFromCart } from '../features/CartSlice';

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    },[cart,dispatch]);

    const handleRemoveFromCart = (cartId,cartTitle)=>{
        dispatch(removeFromCart({id: cartId,name: cartTitle}));
    }

    const handleDecreseCart = (cart) => {
        dispatch(decreaseCart(cart));
    }

    const handleIncreaseCart = (cart) => {
        dispatch(addToCart({item: cart}));
    }

    return (
        <>
            <div className='container mx-auto mt-10 cartContainer'>
                <div className='flex shadow-md my-10 cart'>
                    <div className='w-3/4 bg-white px-10 py-10 cartItem'>
                        <div className='flex justify-between border-b pb-8'>
                            <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
                            <h2 className='font-semibold text-2xl'>{cart.cartTotalQuantity} Items</h2>
                        </div>
                        <div className='flex mt-10 mb-5 cartItem'>
                            {
                                cart.cartItems.length === 0 ? ( 
                                <div className='flex justify-center items-center w-full h-96 sm:text-3xl text-2xl font-medium title-font text-gray-900'>Your cart is currently empty</div>
                                ) :( 
                                    <>
                            <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Product Details</h3>
                            <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Quantity</h3>
                            <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Price</h3>
                            <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Total</h3>
                            </>
                                )
                            }
                        </div>
                        {
                            cart.cartItems.map((cart) => {
                                return (
                                    <div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5' key={cart.id}>
                                        <div className='flex w-2/5'>
                                            <div className='w-20'>
                                                <img className='h-24' src={cart.image} alt={cart.title} />
                                            </div>
                                            <div className='flex flex-col justify-between ml-4 flex-grow'>
                                                <span className='font-bold text-sm'>{cart.title}</span>
                                                <span className='text-red-500 text-xs capitalize'>{cart.category}</span>
                                                <div className='font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer' onClick={() => handleRemoveFromCart(cart.id,cart.title)}>Remove</div>
                                            </div>
                                        </div>
                                        <div className='flex justify-center w-1/5'>
                                            <svg className='fill-current text-gray-600 w-3 cursor-pointer' viewBox='0 0 448 512'><path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' onClick={()=> handleDecreseCart(cart)} />
                                            </svg>

                                            <span className='mx-2 text-center w-8'>{cart.cartQuantity}</span>

                                            <svg className='fill-current text-gray-600 w-3 cursor-pointer' viewBox='0 0 448 512'>
                                                <path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' onClick={()=> handleIncreaseCart(cart)}/>
                                            </svg>

                                        </div>
                                        <span className='text-center w-1/5 font-semibold text-sm'>${cart.price}</span>
                                        <span className='text-center w-1/5 font-semibold text-sm'>${cart.price * cart.cartQuantity}</span>
                                    </div>
                                )
                            })
                        }


                        <Link to="/products" className='flex font-semibold text-indigo-600 text-sm mt-10'>
                            Continue Shopping
                        </Link>
                    </div>

                    <div className='w-1/4 px-8 py-10 cartItem'>
                        <h1 className='font-semibold text-2xl border-b pb-8'>Order Summary</h1>
                        <div className='flex justify-between mt-10 mb-5'>
                            <span className='font-semibold text-sm uppercase'>Items {cart.cartTotalQuantity}</span>
                            <span className='font-semibold text-sm'>590$</span>
                        </div>
                        <div>
                            <label className='font-medium inline-block mb-3 text-sm uppercase'>Shipping</label>
                            <select className='block p-2 text-gray-600 w-full text-sm'>
                                <option>Standard Shipping - $10.00</option>
                            </select>
                        </div>
                        <div className='py-10'>
                            <label for="promo" className='font-semibold inline-block mb-3 text-sm uppercase'>Promo Code</label>
                            <input type='text' placeholder='Enter Your Code' className='p-2 text-sm w-full' />
                        </div>
                        <button className='bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase'>Apply</button>
                        <div className='border-t mt-8'>
                            <div className='flex font-semibold justify-between py-6 text-sm uppercase'>
                                <span>Total Cost</span>
                                <span>${cartTotalAmount}</span>
                            </div>
                            <button className='bg-indigo-500 hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart