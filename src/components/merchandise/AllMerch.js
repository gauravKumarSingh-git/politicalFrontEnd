import React from 'react'

function AllMerch(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>All Merchandise</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.merchs &&
            props.merchs.sort((e1, e2) => e1.itemId - e2.itemId).map((item) => (
              <tr key={item.itemId}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
                <td><button className="btn btn-primary" onClick={() => props.handleMerchUpdate(item)}>Update</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllMerch