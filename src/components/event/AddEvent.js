import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import AdminNav from "../navbar/AdminNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          eventName: "",
          description: "",
          location: "",
          date: "",
          startTime: "",
          endTime: "",
        }}
        validate={(value) => {
          const error = {};
          if(!value.eventName){
            error.eventName = "Please fill event name"
          }
          else if (!value.eventName.match("^[a-zA-Z0-9]+( [A-Za-z0-9]+)*$")) {
            error.eventName = "Invalid event name";
          }

          if(!value.description){
            error.description = "Please fill description"
          }

          if(!value.location){
            error.location = "Please fill location"
          }
          else if (!value.location.match("^[a-zA-Z0-9]+( [A-Za-z0-9]+)*$")) {
            error.location = "location should be alphanumeric";
          }

          if(!value.date){
            error.date = "Please enter date"
          }
          if(!value.startTime){
            error.startTime = "Please fill start time"
          }
          if(!value.endTime){
            error.endTime = "Please fill end time"
          }
          if (value.startTime > value.endTime) {
            error.endTime = "End time cannot be before start time";
          }
          // console.log(error);
          return error;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:8080/api/addEvent", values)
          .then((data) => console.log(data))
          .catch((err) => console.log(err))
      
          alert("Successfully added Event")
          navigate("/admin/event")
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div
            style={{
              backgroundImage: "linear-gradient(black,#0C1B6B)",
              color: "white",
              height: "170vh",
            }}
          >
            <AdminNav />
            <div className="container mt-3 col-md-6 shadow p-5 rounded">
              <h1>Add Event</h1>
              <br></br>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"
                    placeholder="Enter name"
                    value={values.eventName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger">{errors.eventName && touched.eventName && errors.eventName}</p>
                </Form.Group>

                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder="Enter description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger">{errors.description &&
                    touched.description &&
                    errors.description}</p>
                  
                </Form.Group>

                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger"> {errors.location && touched.location && errors.location}</p>
                 
                </Form.Group>

                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Enter date"
                    min={new Date().toISOString().split("T")[0]}
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger">{errors.date && touched.date && errors.date}</p>
                  
                </Form.Group>

                <Form.Group controlId="formStartTime">
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="startTime"
                    placeholder="Enter start time"
                    value={values.startTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger">{errors.startTime && touched.startTime && errors.startTime}</p>
                  
                </Form.Group>

                <Form.Group controlId="formEndTime">
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="endTime"
                    placeholder="Enter end time"
                    value={values.endTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-danger">{errors.endTime && touched.endTime && errors.endTime}</p>
                  
                </Form.Group>

                <Button variant="primary my-3" type="submit" disabled={isSubmitting}>
                  Add Event
                </Button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default AddEvent;
