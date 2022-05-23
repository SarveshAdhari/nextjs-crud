import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import domain from '../utils/config'

function TaskItem({task}) {
  const router = useRouter()

  async function deletetask(){
    
    try {
      await axios.delete(`${domain}/tasks/${task._id}`)
      alert('Task deleted successfully')
      router.reload()
    } catch (error) {
      alert('Something went wrong')
      console.log(error)
    }
  }

  return (
    <div key={task._id} className="task">
        <span className="task_title"><b>{task.title}:</b></span><br />
        <span className="task_description">{task.description}</span><br/>
        <button className="btn btn-dark" onClick={() => router.push(`/tasks/${task._id}`)}>Edit</button>
        <button className="btn btn-danger" onClick={() => {deletetask(task._id)}}>Delete</button>
    </div>
  )
}

export default TaskItem