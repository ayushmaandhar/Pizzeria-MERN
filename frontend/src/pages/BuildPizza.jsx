import React, { useEffect, useState } from 'react';
import { addIngredientToCart } from '../redux/slices/cartSlice';
import APICall from '../utils/apiCall';
import '../styles/page-styles/buildpizza.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const BuildPizza = () => {

  const [ingredients, setIngredients] = useState([]);
  const [totalIngCost, setTotalIngCost] = useState(0);
  const [selectedIngs, setSelectedIngs] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await APICall('get', 'ingredient/getAll');
    setIngredients(data.ingredients);
  };

  console.log(useSelector(state=> state.cart));

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e, ingredient) => {
    if (e.target.checked) {
      setSelectedIngs([...selectedIngs, ingredient]); // Using spread operator to create a new array
      setTotalIngCost(totalIngCost => totalIngCost + ingredient.price);
    } else {
      setSelectedIngs(selectedIngs.filter(item => item.id !== ingredient.id)); // Remove ingredient from array
      setTotalIngCost(totalIngCost => totalIngCost - ingredient.price);
    }
  }

  const sendIngsToCart = () => {
   for (const ing of selectedIngs) {
      dispatch(addIngredientToCart(ing));
    }
    navigate("/cart"); 
    // dispatch(addIngredientToCart(selectedIngs));
  }

  return (
    <div className='container'>
      <p className='text-center'>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below</p>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <table className='table table-bordered table-striped'>
            <tbody >
                { ingredients.map((ingredient) => (
                    <tr className='row'>
                      <td className='col-5'><img className='ing-img ' src={ingredient.image.toString()} alt='img'/></td>
                      <td className='col-4'>
                        <b className='row'>
                          <div className="col-7">{ingredient.tname}</div>
                          <div className="col-5">₹{(ingredient.price)}.00</div>
                        </b>
                      </td>
                      <td className='col-3'> <input onChange={(e)=>handleChange(e, ingredient)} type='checkbox'/>&nbsp;<span className='text-warning'>Add</span></td>
                    </tr>
                ))}
            </tbody>
            <div className='t-cost'>Total Cost:&nbsp;₹{totalIngCost}.00</div>
          </table>
          <div className='text-center'>
              <button className='btn btn-dark text-warning' onClick={() => sendIngsToCart()}>Build Ur Pizza</button>
          </div>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  )
}


export default BuildPizza;