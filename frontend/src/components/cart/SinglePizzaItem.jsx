import React, { useEffect, useState } from 'react';
import '../../styles/page-styles/cart.css';
import { useDispatch } from 'react-redux';
import { removePizzaFromCart } from '../../redux/slices/cartSlice';
import {MdDelete} from 'react-icons/md'


const SinglePizzaItem = (pizza) => {

    const dispatch = useDispatch();
    const[quantity, setQuantity] = useState(pizza.quantity);

    useEffect(()=>{
        pizza.callSetTotalPizzaCost(pizza.price);
    },[]);

    const incrementQuantity = () => {
        setQuantity(quantity => quantity + 1);
        pizza.callSetTotalPizzaCost(pizza.price*pizza.quantity);
        pizza.refreshValues();
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1);
            pizza.callSetTotalPizzaCost(-pizza.price*pizza.quantity);
        }
        else {
            delPizzaFromCart();
        }
        pizza.refreshValues();
    }

    const delPizzaFromCart = () => {
        pizza.callSetTotalPizzaCost(-pizza.price*quantity);
        setQuantity(1);
        dispatch(removePizzaFromCart(pizza.name));
        pizza.refreshValues();
    }

  return (
    <div className='single-pizza-item'>
        <div className='row'>
            <div className='col-3 text-center'>
                <img className='pizza-item-img' src={pizza.image} alt='piz'/>
            </div>
            <div className="col-3 d-flex align-items-center">
                <b>{pizza.name}</b>
            </div>
            <div className="col-3 d-flex align-items-center">
                <b>₹{(pizza.price)}.00</b>
            </div>
            <div className='col d-flex align-items-center'>
                <button className='btn btn-dark btn-sm' onClick={decrementQuantity}>-</button>
                &nbsp;&nbsp;<b>{quantity}</b>&nbsp;&nbsp;
                <button className='btn btn-dark btn-sm' onClick={incrementQuantity}>+</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div onClick={delPizzaFromCart} ><MdDelete color='red' size={25}/></div>
            </div>
        </div>
    </div>
  )
}

export default SinglePizzaItem;