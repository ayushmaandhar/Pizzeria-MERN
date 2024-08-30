import React, { useEffect, useState } from 'react';
import '../../styles/component-styles/pizzacard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPizzaToCart, removePizzaFromCart } from '../../redux/slices/cartSlice';
import toast from 'react-hot-toast';

const PizzaCard = (props) => {
  const pizzas = useSelector(state => state.cart.pizzas);
  const [pizzaInTheCart, setPizzaInTheCart] = useState(false);
  const dispatch = useDispatch();

  const sendPizzaToCart = (pizza) => {
    dispatch(addPizzaToCart(pizza));
    toast.success(pizza.name +" added to the Cart!");
    setPizzaInTheCart(true);
  }

  const removeSinglePizzaFromCart = (pizza) => {
    dispatch(removePizzaFromCart(pizza.name));
    toast.success(pizza.name +" removed from Cart!");
    setPizzaInTheCart(false);
  }

  useEffect(() => {
    if (pizzas.some(pizza => pizza.name === props.name)) {
      setPizzaInTheCart(true);
    } else {
      setPizzaInTheCart(false);
    }
  }, [pizzas]);

  return (
    <div className='col-6 pizz-card mb-3 '>
      <div className='row pt-2'>
        <div className="col-2 ">
          <div>
            <h5>{props.name}</h5>
          </div><br />
          <div>
            {
              props.type === 'veg'
                ? <img className='veg-nonveg-icon' src='veg.jpg' alt='veg' />
                : <img className='veg-nonveg-icon' src='nonveg.jpg' alt='nonveg' />
            }
          </div><br />
          <div>
            <b>₹{(props.price)}.00</b>
          </div><br />
        </div>
        <div className="col-6">
          <div>
            <p> {props.desc}. </p>
          </div><br />
          <div>
            <b>Ingredients:</b>&nbsp;{props.ing.map((a, i, arr) => {
              if (i === arr.length - 1) return (a + '.')
              else return (a + ', ')
            })}
          </div><br />
          <div>
            <b>Toppings:</b>&nbsp;{props.tops.map((a, i, arr) => {
              if (i === arr.length - 1) return (a + '.')
              else return (a + ', ')
            })}
          </div><br />
        </div>
        <div className="col-4">
          <div>
            <img alt='pizza' className="pizz-img" src={props.image} />
          </div><br />
          <div className='text-center'>
            {
              pizzaInTheCart 
              ? <button onClick={()=>removeSinglePizzaFromCart(props)} className='btn btn-danger'>Remove from Cart</button> 
              : <button onClick={()=>sendPizzaToCart(props)} className='btn btn-warning text-white'>Add to cart</button> 
              
            }
          </div><br />
        </div>
      </div>
    </div>
  )
}

export default PizzaCard;