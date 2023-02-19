import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Navbar from "../navbar/Navbar"
import axios from "axios";
import { useNavigate} from "react-router-dom";



const AddContact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [showError, setShowError] = useState(false);
  const [isValid, setIsValid] = useState({
    name: true,
    description: true,
  });

  const handleSubmit = (contact) => {
    contact.preventDefault();

    // Validate the form data
    if (
      !formData.name ||
      !formData.description 
    ){
      setShowError(true);
      return;
    }
    // Do something with the form data
    // console.log(formData);
    axios.post("http://localhost:8080/api/contacts/AddContact", formData)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    alert("Successfully added Contact Us")
    navigate("/contact")
    // Clear the form data
    setFormData({
      name: "",
      description: "",
    });
    setShowError(false);
  } ;

const handleChange = (contact) => {
const { name, value } = contact.target;
setFormData((prevState) => ({
  ...prevState,
  [name]: value,
}));
validateField(name, value);
};

const validateField = (name, value) => {
switch (name) {
  case "name":
    if (value.trim().length === 0) {
      setIsValid((prevState) => ({ ...prevState, name: false }));
    } else {
      setIsValid((prevState) => ({ ...prevState, name: true }));
    }
    break;
  case "description":
    if (value.trim().length === 0) {
      setIsValid((prevState) => ({ ...prevState, description: false }));
    } else {
      setIsValid((prevState) => ({ ...prevState, description: true }));
    }
    break;
  default:
    break;
}
};

return (
  <div>
    <Navbar />
<div className="container mt-5 p-4 col-md-6 shadow rounded">
  <h1>Contact Us</h1>
  {showError && <Alert variant="danger">Please fill in all fields</Alert>}
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        isInvalid={!isValid.name}
      />
      {!isValid.name && (
        <Form.Control.Feedback type="invalid">
          Please enter a name
        </Form.Control.Feedback>
      )}
    </Form.Group>

    <Form.Group controlId="formDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name="description"
        placeholder="Enter description"
        value={formData.description}
        onChange={handleChange}
        isInvalid={!isValid.description}
      />
      {!isValid.description && (
        <Form.Control.Feedback type="invalid">
          Please enter a description
        </Form.Control.Feedback>
      )}
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>
</div>
);
      };
export default AddContact;

