import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import AdminNav from "../navbar/AdminNav";

function UpdateContact() {
    const navigate = useNavigate();
  const initialValues = useSelector((state) => state.contact);
//   console.log(initialValues);
  const [formData, setFormData] = useState(initialValues);
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
          ) {
      setShowError(true);
      return;
    }

    // Do something with the form data
    // console.log(formData);
    axios.put("http://localhost:8080/api/updateContact", formData)
    .then((data) => {
        console.log(data)
        alert("Successfully updated");
        navigate("/Contact")
    })
    .catch((err) => console.log(err));
    // Clear the form data
    setFormData({
      name: "",
      description: "",
    });
    setShowError(false);
  };

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
      case "Name":
        if (value.trim().length === 0) {
          setIsValid((prevState) => ({ ...prevState, name: false }));
        } else {
          setIsValid((prevState) => ({ ...prevState, name: true }));
        }
        break;
      case "Description":
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
      <AdminNav />
      <div className="container mt-5 col-md-6">
        <h1>Add Contact</h1>
        {showError && <Alert variant="danger">Please fill in all fields</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              placeholder="Enter name"
              value={formData.contactName}
              onChange={handleChange}
              isInvalid={!isValid.contactName}
            />
            {!isValid.eventName && (
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
            Update Contact Us
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateContact;
