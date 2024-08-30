import React from 'react'

const Payment = (props) => {

  const amt = <span className='text-success'>₹{props.amount}</span>;
  const pizz = <span className='text-warning'><b>Pizzeria</b></span>
  return (
    <div>
      <div className='text-center h2 mt-3 text-info'> <i>Order Successfully placed for an Amount of {amt} at {pizz} </i> </div>
        <div className='text-center'>
            <img src="success.gif" alt="paid" style={{"width":"40vw"}}/>
        </div>
    </div>
  )
}

export default Payment;