import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import domain from '../../utils/config'

function addtask() {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function submit(e) {

        e.preventDefault()

        if(title == '' || description == ''){
            alert('Please enter a valid input')
        }
        else{
        const post = {
            title,
            description
        }

        try {
            axios.post(`${domain}/tasks`,post)
            alert('Task added successfully')
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
                <p>Add A New Task</p>
                <hr />
            </div>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter task title"
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
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button
                    className="btn btn-outline-success sub"
                    onClick={e => submit(e)}>
                    Submit
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

export default addtask;