import React from 'react'

function UserContacts(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>Contact Us</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.contacts &&
            props.contacts.sort((c1, c2) => c1.contactId - c2.contactId).map((contact) => (
              <tr key={contact.contactId}>
                <td>{contact.name}</td>
                <td>{contact.description}</td>
                <td><button id={`join${contact.contactId}`} className="btn btn-primary" onClick={() => props.handleUpdate(contact)}>Update</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserContacts