import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeIngFromCart } from '../../redux/slices/cartSlice';
import { MdDelete } from 'react-icons/md';

const SingleIngredientItem = (ing) => {
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeIngFromCart(ing.tname));
    ing.callSetTotalIngCost(-ing.price);
  }

  useEffect(() => {
    ing.callSetTotalIngCost(ing.price);
  }, []);

  return (
    <div className='row'>
        <div className="col-5">{ing.tname}</div>
        <div className="col-2">x1</div>
        <div className="col-3"><b>₹{(ing.price)}.00</b></div>
        <div className="col-2" onClick={handleDelete}><MdDelete/></div>
    </div>
  )
}

export default SingleIngredientItem;