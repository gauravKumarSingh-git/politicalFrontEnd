import React from 'react'

function UpdateEvent() {
  return (
    <div>
      <AdminNav />
      <div className="container mt-5 col-md-6">
        <h1>Add Event</h1>
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
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Event
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default UpdateEvent