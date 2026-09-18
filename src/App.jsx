import React, { useState } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: 'Elicitar Requisitos',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Fazer o Desenvolvimento Back',
      concluida: false
    },
    {
      id: 3,
      titulo: 'Fazer o Desenvolvimento Front',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Comprar mouse',
      concluida: false
    }
  ])

  const alterarStatus = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              concluida: !tarefa.concluida
            }
          : tarefa
      )
    )
  }

  const excluirTarefa = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.filter(
        (tarefa) => tarefa.id !== id
      )
    )
  }

  return (
    <div>
      <Header />

      <TaskSummary tarefas={tarefas} />

      <TaskList
        tarefas={tarefas}
        onAlterarStatus={alterarStatus}
        onExcluir={excluirTarefa}
      />
    </div>
  )
}

export default App
