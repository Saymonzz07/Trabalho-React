import React from 'react'

const TaskSummary = ({ tarefas }) => {
  const total = tarefas.length

  const concluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length

  const pendentes = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length

  return (
    <div>
      <h2>Resumo</h2>

      <p>Total: {total}</p>

      <p>Concluídas: {concluidas}</p>

      <p>Pendentes: {pendentes}</p>

      {pendentes > 0 ? (
        <p>Você ainda possui tarefas pendentes.</p>
      ) : (
        <p>
          Parabéns! Todas as tarefas foram concluídas!
        </p>
      )}
    </div>
  )
}

export default TaskSummary
