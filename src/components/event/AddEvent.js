import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    event_name: "",
    description: "",
    location: "",
    date: "",
    start_time: "",
    end_time: "",
  });
  const [showError, setShowError] = useState(false);
  const [isValid, setIsValid] = useState({
    event_name: true,
    description: true,
    location: true,
    date: true,
    start_time: true,
    end_time: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    if (
      !formData.event_name ||
      !formData.description ||
      !formData.location ||
      !formData.date ||
      !formData.start_time ||
      !formData.end_time
    ) {
      setShowError(true);
      return;
    }

    // Do something with the form data
    console.log(formData);
    // Clear the form data
    setFormData({
      event_name: "",
      description: "",
      location: "",
      date: "",
      start_time: "",
      end_time: "",
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
      case "event_name":
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
      case "start_time":
        if (!value) {
          setIsValid((prevState) => ({ ...prevState, startTime: false }));
        } else {
          setIsValid((prevState) => ({ ...prevState, startTime: true }));
        }
        break;
      case "end_time":
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

  return (
    <div className="container mt-5 col-md-6">
      <h1>Add Event</h1>
      {showError && <Alert variant="danger">Please fill in all fields</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="event_name"
            placeholder="Enter name"
            value={formData.event_name}
            onChange={handleChange}
            isInvalid={!isValid.event_name}
          />
          {!isValid.event_name && (
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
            name="start_time"
            placeholder="Enter start time"
            value={formData.start_time}
            onChange={handleChange}
            isInvalid={!isValid.start_time}
          />
          {!isValid.start_time && (
            <Form.Control.Feedback type="invalid">
              Please enter a start time
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group controlId="formEndTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="time"
            name="end_time"
            placeholder="Enter end time"
            value={formData.end_time}
            onChange={handleChange}
            isInvalid={!isValid.end_time}
          />
          {!isValid.end_time && (
            <Form.Control.Feedback type="invalid">
              Please enter an end time
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Event
        </Button>
      </Form>
    </div>
  );
};
export default AddEvent;
