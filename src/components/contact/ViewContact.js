import React from 'react'

function ViewContact(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>Queries</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts &&
            props.contacts.sort((e1, e2) => e1.contactId - e2.contactId).map((contact) => (
              <tr key={contact.contactId}>
                <td>{contact.name}</td>
                <td>{contact.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewContact