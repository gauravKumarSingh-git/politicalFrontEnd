import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';

function AddMerch() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ itemName: "" , price: ""});
  const [formError, setFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(validate(formValue));
    if (Object.keys(formError).length === 0) {
      console.log(formValue)
      axios
        .post("http://localhost:8080/api/addItem", formValue)
        .then((data) => {
          console.log(data);
          alert("Successfully Added");
          navigate("/admin/merchandise");
        })
        .catch((err) => console.log(err));
    }
    // setIsSubmit(true);
  };

  const validate = (value) => {
    const errors = {};
    if (!value.itemName) {
      errors.itemName = "Item Name cannot be empty";
    }
    if(!value.price){
      errors.price = "Price cannot be empty"
    }
    return errors;
  };
  return (
    <div>
      <div
        className="p-3"
        style={{ backgroundColor: "#ccffe6", height: "100vh" }}
      >
        <form
          className="col-md-5 m-auto mt-5 bg-light p-4 rounded shadow"
          onSubmit={handleSubmit}
        >
          <div className="card-header">
            <h2>Add Merchandise</h2>
          </div>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field my-3">
              <label>Item Name</label>
              <input
                type="text"
                name="itemName"
                className="form-control"
                id="itemName"
                placeholder="Enter Name of Item"
                value={formValue.itemName}
                onChange={handleChange}
                required
              />
            </div>
            {<p className="text-danger">{formError.itemName}</p>}
            <div className="field my-3">
              <label>Item Price</label>
              <input
                type="number"
                name="price"
                max="20000"
                className="form-control"
                id="price"
                placeholder="Enter Price of Item"
                value={formValue.price}
                onChange={handleChange}
                required
              />
            </div>
            {<p className="text-danger">{formError.price}</p>}
            <button className="btn btn-primary">Add Merchandise</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMerch