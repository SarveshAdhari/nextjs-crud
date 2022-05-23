import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import domain from '../../utils/config'
import axios from 'axios'

function index(task) {
    const router = useRouter()
    const [title, setTitle] = useState(task.task.title)
    const [description, setDescription] = useState(task.task.description)

    function update(){

        if(title == '' || description == ''){
            alert('Please enter a valid input')
        }
        else{
        const updatedtask = {
            title,
            description
        }
        try {
            axios.put(`${domain}/tasks/${task.task._id}`,updatedtask)
            alert('Task updated successfully')
            router.push('/tasks')

        }
        catch (e) {
            console.error('Error:', e);
        }
        }
    }

  return (
    <div className="form">
        <div className="form-heading">
                <p>Update A Task</p>
                <hr />
            </div>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter task title"
                        name="task"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        rows="7"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button
                type="button"
                className="btn btn-outline-success sub"
                onClick={e => update(e)}>
                    Update
                </button>
                <button 
                type="button" 
                className="btn btn-outline-secondary can"
                onClick={() => router.back()}>
                    Cancel
                </button>
            </form>
    </div>
  )
}

export async function getServerSideProps(context){

    const response = await fetch(`${domain}/tasks/${context.query.id}`)
    const data = await response.json()

    return{
        props: {
            task: data
        }
    }

}

export default index