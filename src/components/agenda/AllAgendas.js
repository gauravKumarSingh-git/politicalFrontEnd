import React from 'react'

function AllAgendas(props) {
  return (
    <div className="col-sm-10 m-auto my-5 shadow">
      <h2 className='m-2 p-2'>Agendas</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.agendas &&
            props.agendas.sort((e1, e2) => e1.agendaId - e2.agendaId).map((agenda) => (
              <tr key={agenda.agendaId}>
                <td>{agenda.agendaId}</td>
                <td>{agenda.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllAgendas