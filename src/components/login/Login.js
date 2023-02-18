import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../Actions/UserActions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {"userName" : "", "password" : "", "role": "user"}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(()=>{
      
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios
      .get(`http://localhost:8080/api/getUser/${formValues.userName}/${formValues.password}`)
      .then((data) => {
          // console.log(formValues)
          dispatch(fetchUser(data.data));
          if(data.data.role === 'admin'){
            navigate('/admin')
          }else{
            navigate('/home');
          }
      })
      .catch((error) => {
        console.log(error)
        document.getElementById('errorMessage').innerHTML = 'Invalid Credentials'
      });
      setFormValues(initialValues);
    }
  },[formErrors])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name] : value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true);
  }

  const validate = (value) => {
    const errors = {}
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

    return errors;
  } 

  return (
    <div>
      <div className="p-3" style={{backgroundColor: '#FDE0B2', height:"100vh"}}>
      <form className="col-md-5 m-auto mt-5 bg-light p-4 rounded shadow" onSubmit={handleSubmit}>
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field my-3">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              id="userName"
              placeholder="Enter user name"
              value={formValues.userName}
              onChange={handleChange}
              required
            />
          </div>
          {<p className="text-danger">{formErrors.userName}</p>}
          <div className="field my-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          {<p className="text-danger">{formErrors.password}</p>}
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
          <button className='btn btn-success' type="submit">Login</button>
          <div id='errorMessage' className='text-danger py-3'></div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login