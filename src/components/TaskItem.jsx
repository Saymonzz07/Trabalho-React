import React from 'react'

const TaskItem = ({
  titulo,
  concluida,
  onAlterarStatus,
  onExcluir
}) => {
  return (
    <div>
      <h3>{titulo}</h3>

      <p>
        Status: {concluida ? 'Concluída' : 'Pendente'}
      </p>

      {!concluida && (
        <button onClick={onAlterarStatus}>
          Concluir
        </button>
      )}

      {concluida && (
        <button onClick={onAlterarStatus}>
          Desmarcar
        </button>
      )}

      <button onClick={onExcluir}>
        Excluir
      </button>
    </div>
  )
}

export default TaskItem