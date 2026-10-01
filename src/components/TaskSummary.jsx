import React from 'react'
import './TaskSummary.css'

const TaskSummary = ({ tarefas }) => {
const total = tarefas.length

const concluidas = tarefas.filter(
(tarefa) => tarefa.concluida
).length

const pendentes = tarefas.filter(
(tarefa) => !tarefa.concluida
).length

return ( <section className="task-summary"> <h2>Resumo</h2>

  <div className="summary-cards">
    <div className="summary-card">
      <span>Total</span>
      <strong>{total}</strong>
    </div>

    <div className="summary-card">
      <span>Concluídas</span>
      <strong>{concluidas}</strong>
    </div>

    <div className="summary-card">
      <span>Pendentes</span>
      <strong>{pendentes}</strong>
    </div>
  </div>

  {pendentes > 0 ? (
    <p className="summary-message">
      Você ainda possui tarefas pendentes.
    </p>
  ) : (
    <p className="summary-message">
      Parabéns! Todas as tarefas foram concluídas!
    </p>
  )}
</section>


)
}

export default TaskSummary
