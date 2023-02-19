import React from "react";

function MerchCard(props) {
  // https://source.unsplash.com/1600x900/?water
  return (
    <div className="col h-150">
    <div class="card m-3" style={{width: "18rem"}}>
      <img src={`https://source.unsplash.com/1600x900/?${props.merch.itemName}`} class="card-img-top" alt="not found" />
      <div class="card-body">
        <h5 class="card-title">{props.merch.itemName}</h5>
        <p class="card-text">
          Rs {props.merch.price}
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
    </div>
  );
}

export default MerchCard;
