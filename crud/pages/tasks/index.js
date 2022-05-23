import React from 'react'
import TaskItem from '../../components/TaskItem'
import domain from '../../utils/config'

function index(tasks) {
  const taskitems = tasks.tasks.map((task) => {
    return <TaskItem task={task} />
  }).reverse()

  return (
      <div className="row tasks">
        <h1>All Tasks</h1>
        <hr />
        <div>
        {taskitems}
        <hr />
        </div>
      </div>
  )
}


export async function getStaticProps() {
  
  const res = await fetch(`${domain}/tasks`)
  const data = await res.json()

    return{
        props:{
          tasks: data
        },
    }
}

export default index