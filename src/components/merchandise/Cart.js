import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar';
import { removeMerch } from '../../Actions/MerchActions';

function Cart() {
    const dispatch = useDispatch();
    const merchs = useSelector((state) => state.merch.merchs)
    const total = useSelector((state) => state.merch.total)

    console.log(merchs);

    const handleRemove = (merch) => {
        dispatch(removeMerch(merch));
    }

  return (
    <div>
        <Navbar />
        <h3 className='text-center p-3 m-3'>Your Cart</h3>
        <div className='card shadow border m-auto' style={{width: '35rem'}}>
            <ul className='list-group list-group-flush' >
                {merchs.map((merch)=>(
                    <li className='list-group-item col-12 d-flex' key={merch.itemId}>
                        <p className='col-4'>{merch.itemName}</p>
                        <p className='col-4 text-center'>&#8377; {merch.price}</p>  
                        <div className='col-4 d-flex justify-content-center'> 
                            <button className='btn btn-danger' onClick={() => handleRemove(merch)}>Remove</button>
                        </div>
                       
                    </li>
                ))}

            </ul>
            <div className='p-3 d-flex'>
                <p className='col-4'>Total</p>
                <p className='col-4 text-center'>&#8377; {total}</p>
            </div>
            <button className='btn btn-success col-12'>Order</button>
        </div>
    </div>
  )
}

export default Cart