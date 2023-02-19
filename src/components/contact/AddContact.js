import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contacts")
      .then((response) => setContacts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (!formData.name || !formData.description) {
      setShowError(true);
      return;
    }

    // Do something with the form data
    axios
      .post("http://localhost:8080/api/contacts/AddContact", formData)
      .then((response) => {
        console.log(response);
        setContacts([...contacts, response.data]);
      })
      .catch((error) => console.log(error));

    alert("Successfully added Contact Us");
    navigate("/contact");

    // Clear the form data
    setFormData({
      name: "",
      description: "",
    });
    setShowError(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
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
          setIsValid((prevState) => ({
            ...prevState,
            description: false,
          }));
        } else {
          setIsValid((prevState) => ({
            ...prevState,
            description: true,
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    // Validate the form data
    if (!formData.name || !formData.description) {
      setShowError(true);
      return;
    }

    // Update the contact with the form data
    axios
      .put("http://localhost:8080/api/contact/UpdateContact", formData)
      .then((data) => {
        console.log(data);
        alert("Successfully updated");
        navigate("/Contact");
      })
      .catch((err) => console.log(err));

    // Clear the form data
    setFormData({
      name: "",
      description: "",
    });
    setShowError(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-4 col-md-6 shadow rounded">
        <h1>Contact Us</h1>
        {showError && (
          <Alert variant="danger">Please fill in all fields</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!isValid.name}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name.
              </Form.Control.Feedback>
            </Form.Group>
      
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                isInvalid={!isValid.description}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a description.
              </Form.Control.Feedback>
            </Form.Group>
      
            <Button variant="primary" type="submit" className="mr-2">
              Add
            </Button>
      
            <Button variant="warning" onClick={handleUpdate}>
              Update
            </Button>
          </Form>
        </div>
      </div>
);
};

export default AddContact;