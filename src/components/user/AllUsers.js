import React from 'react'

function AllUsers(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>All Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.users &&
            props.users.sort((e1, e2) => e1.userId - e2.userId).map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td><button className="btn btn-primary" onClick={() => props.handleUserUpdate(user)}>Update</button></td>
                {/* <td><button className="btn btn-danger" onClick={() => props.handleUserRemove(user)}>Remove</button></td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers