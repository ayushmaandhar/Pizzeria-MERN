import React, { useEffect, useState } from 'react'
import APICall from '../utils/apiCall';
import PizzaCard from '../components/OrderPizza/PizzaCard';

const OrderPizza = () => {

  const [pizzas, setPizzas] = useState([]);

  const fetchData = async () => {
    const data = await APICall('get', 'pizza/getAll');
    setPizzas(data.pizzas); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container mt-4'>
  
      {pizzas.map((_, index, arr) => {
        if (index < 6 && index % 2 === 0 && index + 1 < arr.length) {
            const [pizz1, pizz2] = [arr[index], arr[index + 1]];
            
          return (
            <div className='row'>
              <PizzaCard
                  name={pizz1.name}
                  type={pizz1.type} 
                  price={pizz1.price} 
                  desc={pizz1.description} 
                  ing={pizz1.ingredients} 
                  tops={pizz1.topping} 
                  image={pizz1.image}
              />
              <PizzaCard
                  name={pizz2.name}
                  type={pizz2.type} 
                  price={pizz2.price} 
                  desc={pizz2.description} 
                  ing={pizz2.ingredients} 
                  tops={pizz2.topping} 
                  image={pizz2.image}
              />
          </div>
          );
      }})}
      
    </div>
  )
}

export default OrderPizza;