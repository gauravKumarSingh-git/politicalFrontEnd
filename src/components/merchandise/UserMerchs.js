import React from 'react'

function UserMerchs(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow rounded" style={{backgroundColor : "white"}}>
      <h2 className='m-2 p-2'>Your Orders</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {props.user.merchandises &&
            props.user.merchandises.sort((e1, e2) => e1.itemId - e2.itemId).map((merch) => (
              <tr key={merch.itemId}>
                <td>{merch.itemName}</td>
                <td>{merch.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserMerchs