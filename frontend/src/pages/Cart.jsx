import { useDispatch, useSelector } from 'react-redux';
import SinglePizzaItem from '../components/cart/SinglePizzaItem';
import { useEffect, useState } from 'react';
import { emptyAllItemsFromCart } from '../redux/slices/cartSlice';
import SingleIngredientItem from '../components/cart/SingleIngredientItem';
import BillCard from '../components/cart/BillCard';
import '../styles/page-styles/cart.css'
import { useNavigate } from 'react-router-dom';
import Payment from '../components/cart/Payment';

const Cart = () => {
  
  const dispatch = useDispatch();
  const ings = useSelector(state => state.cart.ings);
  const pizzas = useSelector(state => state.cart.pizzas);
  const [totalPizzaCost, setTotalPizzaCost] = useState(0);
  const [totalIngCost, setTotalIngCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipCharges, setShipCharges] = useState(0);
  const [finalCost, setFinalCost] = useState(0);
  const [refreshToken, setRefreshToken] = useState(0);
  const [paymentNotDone, setPaymentNotDone] = useState(true);
  const navigate = useNavigate();

  let ingItems = [];
  let pizzaItems = [];

  const addQuantityToObject = (arr) => {
    return arr.map(obj => ({ ...obj, quantity: 1 }));
  };

  ingItems = addQuantityToObject(ings);
  pizzaItems = addQuantityToObject(pizzas);

  const callSetTotalPizzaCost = (val) => {
    setTotalPizzaCost(totalPizzaCost => totalPizzaCost + val);
  }

  const callSetTotalIngCost = (val) => {
    setTotalIngCost(totalPizzaCost => totalPizzaCost + val);
  }

  const refreshValues = () => {
    setRefreshToken(refreshToken => refreshToken + 1);
    console.log(refreshToken);
  }

  const makePayment = () => {
    dispatch(emptyAllItemsFromCart());
    setPaymentNotDone(false);
  }

  const resetCartAmount = () => {
    setTotalPizzaCost(0);
    setTotalIngCost(0);
  }

  useEffect(() => {
    setTax(( totalIngCost + totalPizzaCost ) * 0.05);
    setShipCharges(( totalIngCost + totalPizzaCost ) * 0.025);
    setFinalCost(totalIngCost + totalPizzaCost + tax + shipCharges);
    // setTotalIngCost(totalIngCost => totalIngCost );

  }, [totalIngCost, totalPizzaCost, tax, shipCharges]);


  return (
    <div className='container'>
      { !paymentNotDone ? <Payment amount={finalCost}/>
        :<>
        <div className="row mt-4">
        <div className='col-8 pizza-cart-section'>
           <h5>Pizzas</h5> <hr />
            { 
              pizzaItems.length ? pizzaItems.map((pizza)=> 
                <SinglePizzaItem 
                  image={pizza.image} 
                  name={pizza.name} 
                  price={pizza.price}
                  quantity={pizza.quantity}
                  callSetTotalPizzaCost={callSetTotalPizzaCost}
                  refreshValues={refreshValues}
                />
              ) :  <div> 
                      <div style={{"display":"flex", "justifyContent":"center"}}>
                        <img src='/emptyCart.jpg' className='nopizza' alt='nopizza' /> 
                      </div>
                      <div className='mt-2' style={{"display":"flex", "justifyContent":"center"}}>
                        <i>ohh!! you have no Pizza in your cart!</i>
                      </div>
                  </div>
            }
        </div>
        <div className="col ing-cart-section">
          <h5>Extra Ingredients</h5> <hr />
              {
                ingItems.length ?
                  ingItems.map((ing)=> 
                    <SingleIngredientItem 
                        tname={ing.tname}
                        price={ing.price}
                        callSetTotalIngCost={callSetTotalIngCost}
                    />
                  ) 
                  : <div className='text-center text-primary'>
                      <i>Why not add more ingredients to your pizzas?</i>
                      <button className='text-center mt-3 btn btn-link'
                        onClick={() => navigate('/build')}
                      >
                        Add!!!
                      </button>
                  </div>
              }
        </div>
      </div>
      <div className='row'>
        <div className='cart-aggregation-section'>
              <BillCard
                  totalPizzaCost={totalPizzaCost}
                  totalIngCost={totalIngCost}
                  tax={tax}
                  shipCharges={shipCharges}
                  finalCost={finalCost}
                  makePayment={makePayment}
                  resetCartAmount={resetCartAmount}
              />
        </div>
      </div>
      </>}
    </div>
  )
}

export default Cart;