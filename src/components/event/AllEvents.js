import React, { useEffect } from "react";

function AllEvents(props) {

  return (
    <div className="col-sm-10 m-auto my-5 shadow rounded" style={{backgroundColor : "white"}}>
      <h2 className='m-2 p-2'>Events</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.events &&
            props.events.sort((e1, e2) => e1.eventId - e2.eventId).map((event) => (
              <tr key={event.eventId}>
                <td>{event.eventName}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.startTime}</td>
                <td>{event.endTime}</td>
                <td>{event.location}</td>
                <td><button id={`join${event.eventId}`} className="btn btn-primary" onClick={() => props.handleEventJoin(event)}>Join</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllEvents;
