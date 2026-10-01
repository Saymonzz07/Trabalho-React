import React from 'react'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = ({
tarefas,
onAlterarStatus,
onExcluir
}) => {
return ( <section className="task-list"> <h2>Lista de tarefas</h2>


  <div className="task-items">
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
</section>


)
}

export default TaskList
