import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAgenda() {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ description: "" });
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
      axios
        .post("http://localhost:8080/api/addAgenda", formValue)
        .then((data) => {
          console.log(data);
          alert("Successfully Added");
          navigate("/admin");
        })
        .catch((err) => console.log(err));
    }
    // setIsSubmit(true);
  };

  const validate = (value) => {
    const errors = {};
    if (!value.description) {
      errors.description = "Description cannot be empty";
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
            <h2>Add Agenda</h2>
          </div>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field my-3">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                id="description"
                placeholder="Enter Description"
                value={formValue.description}
                onChange={handleChange}
                required
              />
            </div>
            {<p className="text-danger">{formError.description}</p>}
            <button className="btn btn-primary">Add Agenda</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAgenda;
