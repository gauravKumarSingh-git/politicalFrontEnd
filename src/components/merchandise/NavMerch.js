import React from "react";
import { useNavigate } from "react-router-dom";

function NavMerch() {
  const navigate = useNavigate();

  const cartHandler = () => {
    navigate("/merch/cart")
  }

  return (
    <div className="p-3 mb-2 bg-info text-dark d-flex col-12">
      <h4 className="col-6">Try Our latest Merchandise</h4>
      <div className="col-5"></div>
      <button className="btn btn-danger col-1" onClick={() => cartHandler()}>Cart</button>
    </div>
  );
}

export default NavMerch;
