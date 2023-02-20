import React from 'react'

function AllAgendaAdmin(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>Agendas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.agendas &&
            props.agendas.sort((e1, e2) => e1.agendaId - e2.agendaId).map((agenda) => (
              <tr key={agenda.agendaId}>
                <td className='col-3'>{agenda.agendaId}</td>
                <td className='col-6'>{agenda.description}</td>
                <td className='col-3'>
                    <button className='btn btn-primary mx-3' onClick={() => props.handleAgendaUpdate(agenda)}>Update</button>
                    <button className='btn btn-danger mx-3' onClick={() => props.handleAgendaDelete(agenda)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllAgendaAdmin