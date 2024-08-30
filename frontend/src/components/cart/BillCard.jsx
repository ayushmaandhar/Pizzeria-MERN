import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { emptyAllItemsFromCart } from '../../redux/slices/cartSlice';
import toast from 'react-hot-toast';

const BillCard = (bill) => {

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(emptyAllItemsFromCart());
    toast.success("All items removed from Cart!");
    bill.resetCartAmount();
  }

  const handlePayment = () => {
    bill.makePayment(false);
  } 

  return (
    <div>
        <div className='row'>
            <div className='col'>
                <h5>Bill</h5>
            </div> 
            <div className='col'>
                <div className='text-end'>
                    <button className='btn btn-sm btn-success' onClick={handlePayment}>Pay</button> &nbsp;
                    <button className='btn btn-sm btn-danger' onClick={handleClearCart}>Clear Cart</button>
                </div>
            </div>
        </div>
            <hr />
              <div className="row">
                <div className="col-8">Total Pizza Cost:</div>
                <div className="col-4"><b>₹{bill.totalPizzaCost}</b></div>
              </div>
              <div className="row">
                <div className="col-8">Extra Ingredients Cost:</div>
                <div className="col-4"><b>₹{bill.totalIngCost}</b></div>
              </div>
              <div className="row">
                <div className="col-8">Tax:</div>
                <div className="col-4"><b>₹{bill.tax}</b></div>
              </div>
              <div className="row">
                <div className="col-8">Shipping Charges:</div>
                <div className="col-4"><b>₹{bill.shipCharges}</b></div>
              </div> <hr />
              <div className="row ">
                <div className="col-8 text-primary"><b>Final Amount:</b></div>
                <div className="col-4">
                    <div className="row">
                        <div className='col'>
                            <b className='text-primary'>₹{bill.finalCost}</b>
                        </div>
                        <div className="col-1"></div>
                        
                    </div>
                </div>
              </div>
    </div>
  )
}

export default BillCard