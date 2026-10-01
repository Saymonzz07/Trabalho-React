import React from 'react'
import './TaskItem.css'

const TaskItem = ({
titulo,
concluida,
onAlterarStatus,
onExcluir
}) => {
return (
<article className={`task-card ${concluida ? 'completed' : ''}`}> <h3>{titulo}</h3>


  <p className="task-status">
    Status: {concluida ? 'Concluída' : 'Pendente'}
  </p>

  <div className="task-actions">
    {!concluida && (
      <button
        className="task-button task-button-status"
        onClick={onAlterarStatus}
      >
        Concluir
      </button>
    )}

    {concluida && (
      <button
        className="task-button task-button-status"
        onClick={onAlterarStatus}
      >
        Desmarcar
      </button>
    )}

    <button
      className="task-button task-button-delete"
      onClick={onExcluir}
    >
      Excluir
    </button>
  </div>
</article>


)
}

export default TaskItem
