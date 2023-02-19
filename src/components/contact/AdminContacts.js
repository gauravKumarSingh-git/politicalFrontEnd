import React from 'react'

function AdminContacts(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>Contacted Queries</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.user.contacts &&
            props.user.contacts.sort((c1, c2) => c1.contactId - c2.contactId).map((contact) => (
              <tr key={contact.contactId}>
                <td>{contact.contactId}</td>
                <td>{contact.name}</td>
                <td>{contact.description}</td>
                <td><button className="btn btn-danger" onClick={() => props.handleRemove(contact.contactId)}>Resolved</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminContacts