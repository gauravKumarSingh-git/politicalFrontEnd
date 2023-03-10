import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminNav from "../navbar/AdminNav";

function UpdateEvent() {
  const navigate = useNavigate();
  const initialValues = useSelector((state) => state.event);
  const [formData, setFormData] = useState(initialValues);
  const [showError, setShowError] = useState(false);
  const [isValid, setIsValid] = useState({
    eventName: true,
    description: true,
    location: true,
    date: true,
    startTime: true,
    endTime: true,
  });
  const [formErrors, setFormErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (
      !formData.eventName ||
      !formData.description ||
      !formData.location ||
      !formData.date ||
      !formData.startTime ||
      !formData.endTime
    ) {
      setShowError(true);
      return;
    }

    setFormErrors(validate(formData))
    if(Object.keys(formErrors).length === 0){

      axios.put("http://localhost:8080/api/updateEvent", formData)
      .then((data) => {
          console.log(data)
          alert("Successfully updated");
          navigate("/admin/event")
      })
      .catch((err) => console.log(err));
      // Clear the form data
      setFormData({
        eventName: "",
        description: "",
        location: "",
        date: "",
        startTime: "",
        endTime: "",
      });
    }
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
      case "eventName":
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
      case "location":
        if (value.trim().length === 0) {
          setIsValid((prevState) => ({ ...prevState, location: false }));
        } else {
          setIsValid((prevState) => ({ ...prevState, location: true }));
        }
        break;
      case "date":
        if (!value) {
          setIsValid((prevState) => ({ ...prevState, date: false }));
        } else {
          setIsValid((prevState) => ({ ...prevState, date: true }));
        }
        break;
      case "startTime":
        if (!value) {
          setIsValid((prevState) => ({ ...prevState, startTime: false }));
        } else {
          setIsValid((prevState) => ({ ...prevState, startTime: true }));
        }
        break;
      case "endTime":
        if (!value) {
          setIsValid((prevState) => ({ ...prevState, endTime: false }));
        } else {
          setIsValid((prevState) => ({ ...prevState, endTime: true }));
        }
        break;
      default:
        break;
    }
  };
  const validate = (value) => {
    const error = {}
    if(value.startTime > value.endTime){
      error.startTime = "Start time cannot be after end time"
      error.endTime = "End time cannot be before start time"
    }
    return error;
  }
  return (
    <div>
      <AdminNav />
      <div className="container mt-5 col-md-6 border p-5 shadow">
        <h1>Update Event</h1>
        {showError && <Alert variant="danger">Please fill in all fields</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="eventName"
              placeholder="Enter name"
              value={formData.eventName}
              onChange={handleChange}
              isInvalid={!isValid.eventName}
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

          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              isInvalid={!isValid.location}
            />
            {!isValid.location && (
              <Form.Control.Feedback type="invalid">
                Please enter a location
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Enter date"
              value={formData.date}
              onChange={handleChange}
              isInvalid={!isValid.date}
            />
            {!isValid.date && (
              <Form.Control.Feedback type="invalid">
                Please enter a date
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="formStartTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="time"
              name="startTime"
              placeholder="Enter start time"
              value={formData.startTime}
              onChange={handleChange}
              isInvalid={!isValid.startTime}
            />
            {!isValid.startTime && (
              <Form.Control.Feedback type="invalid">
                Please enter a start time
              </Form.Control.Feedback>
            )}
            {<p className="text-danger">{formErrors.startTime}</p>}
          </Form.Group>

          <Form.Group controlId="formEndTime">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="time"
              name="endTime"
              placeholder="Enter end time"
              value={formData.endTime}
              onChange={handleChange}
              isInvalid={!isValid.endTime}
            />
            {!isValid.endTime && (
              <Form.Control.Feedback type="invalid">
                Please enter an end time
              </Form.Control.Feedback>
            )}
            {<p className="text-danger">{formErrors.endTime}</p>}
          </Form.Group>

          <Button variant="primary my-3" type="submit">
            Update Event
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateEvent;
