import { useEffect, useState } from "react";

function Registration() {
  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
    role: "",
  };

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
    if(name === "role"){
        console.log(value);
        setFormValues({...formValues, "role" : value})
    }
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
    //   dispatch(addTrainee(formValues));
    //   navigate("/")
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
    <div>
      <form className="col-md-5 m-auto bg-light p-4  rounded" onSubmit={handleSubmit}>
        <div className="card-header">
          <h2>Register</h2>
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
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
          <div className="field">
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
          <div className="field">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              id="userName"
              placeholder="Enter userName"
              value={formValues.userName}
              onChange={handleChange}
              required
            />
          </div>
          {isTouched.userName && <p className="text-danger">{formErrors.userName}</p>}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
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
          <div className="dropdown">
            <select
              id="role"
              name="role"
              value={formValues.role}
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <br></br>
          <br></br>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
