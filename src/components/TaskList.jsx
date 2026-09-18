import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({
  tarefas,
  onAlterarStatus,
  onExcluir
}) => {
  return (
    <div>
      <h2>Lista de tarefas</h2>

      {tarefas.map((tarefa) => (
        <TaskItem
          key={tarefa.id}
          titulo={tarefa.titulo}
          concluida={tarefa.concluida}
          onAlterarStatus={() =>
            onAlterarStatus(tarefa.id)
          }
          onExcluir={() =>
            onExcluir(tarefa.id)
          }
        />
      ))}
    </div>
  )
}

export default TaskList
