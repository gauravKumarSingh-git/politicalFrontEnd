import React from "react";

function UserDetails(props) {
  return (
    <div class="card m-auto mt-5" style={{width: "25rem"}}>
      <div class="card-header text-center">User Details</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item col-12 d-flex">
            <p className="col-6 text-center">UserName</p>
            <p className="col-6 text-center">{props.user.userName}</p>
        </li>
        <li class="list-group-item col-12 d-flex">
            <p className="col-6 text-center">First Name</p>
            <p className="col-6 text-center">{props.user.firstName}</p>
        </li>
        <li class="list-group-item col-12 d-flex">
            <p className="col-6 text-center">Last Name</p>
            <p className="col-6 text-center">{props.user.lastName}</p>
        </li>
        <li class="list-group-item col-12 d-flex">
            <p className="col-6 text-center">Role</p>
            <p className="col-6 text-center">{props.user.role}</p>
        </li>
      </ul>
    </div>
  );
}

export default UserDetails;
