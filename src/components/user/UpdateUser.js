import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function UpdateUser() {
    const initialValues = useSelector((state) => state.toBeUpdate);
    const navigate = useNavigate();;
    // const initialValues = {
    //   firstName: "",
    //   lastName: "",
    //   password: "",
    //   userName: "",
    //   role: "user",
    // };
  
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isTouched, setIsTouched] = useState({
      firstName: false,
      lastName: false,
      password: false,
      userName: false,
      role: false,
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      // if(name === "role"){
      //     console.log(value);
      //     setFormValues({...formValues, "role" : value})
      // } 
      setFormValues({ ...formValues, [name]: value });
      setFormErrors(validate(formValues))
      setIsTouched({...isTouched, [name]: true});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      if(Object.keys(formErrors).length === 0 && isSubmit){
          console.log(formValues);
          axios.put("http://localhost:8080/api/updateUser", formValues)
          .then((data) => {
            console.log(data)
            alert("Successfully Updated");
            navigate("/admin/users")
          })
          .catch((err) => console.log(err));
          setFormValues(initialValues);
      //   alert("Successfully Signed Up")
          
      }
    }, [formErrors]);
  
    const validate = (value) => {
      const errors = {};
      if (!value.userName) {
        errors.userName = "Please provide username";
      } else if (!value.userName.match("^[a-zA-Z0-9]+$")) {
        errors.userName = "Invalid username";
      }
      if (!value.password) {
        errors.password = "Please provide password";
      } else if (value.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (value.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      } else if (!value.password.match("^[a-zA-Z0-9$@]+$")) {
        errors.password = "Invalid Password";
      }
      if (!value.firstName) {
        errors.firstName = "Please provide firstname";
      } else if (!value.firstName.match("^[a-zA-Z]+$")) {
        errors.firstName = "Invalid first name";
      }
      if (!value.lastName) {
        errors.lastName = "Please provide lastname";
      } else if (!value.lastName.match("^[a-zA-Z]+$")) {
        errors.lastName = "Invalid last name";
      }
      return errors;
    };

  return (
    <div className="p-3" style={{backgroundImage: "linear-gradient(#0C1B6B,black)",color: "black", height:"100vh"}}>
      <form className="col-md-5 m-auto mt-5  p-4 rounded shadow" style={{color:'white'}} onSubmit={handleSubmit}>
        <div className="card-header">
          <h2>Update User</h2>
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field my-3">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              placeholder="Enter first name"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
          </div>
          {isTouched.firstName && <p className="text-danger">{formErrors.firstName}</p>}
          <div className="field my-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              placeholder="Enter last name"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
          </div>
          {isTouched.lastName && <p className="text-danger">{formErrors.lastName}</p>}
          <div className="field my-3">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              id="userName"
              placeholder="Enter userName"
              value={formValues.userName}
              onChange={handleChange}
              disabled={true}
              required
            />
          </div>
          {isTouched.userName && <p className="text-danger">{formErrors.userName}</p>}
          <div className="field my-3">
            <label>Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          {isTouched.password && <p className="text-danger">{formErrors.password}</p>}
          <div className="dropdown my-3">
            <select
              id="role"
              name="role"
              className='px-3 py-1'
              value={formValues.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateUser