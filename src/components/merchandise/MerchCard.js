import React from "react";

function MerchCard(props) {
  return (
    <div className="col h-150">
    <div className="card m-3" style={{width: "18rem"}}>
      <img src={`https://source.unsplash.com/1600x900/?${props.merch.itemName}`} className="card-img-top" alt="not found" />
      <div className="card-body">
        <h5 className="card-title">{props.merch.itemName}</h5>
        <p className="card-text">
          &#8377; {props.merch.price}
        </p>
        <button className="btn btn-primary cartBtn" onClick={() => props.addToCartHandler(props.merch)}>Add to Cart</button> 
      </div>
    </div>
    </div>
  );
}

export default MerchCard;
