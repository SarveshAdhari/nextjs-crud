
export default function Home() {
  return (
    <div className="info">
        <p>
          Hi! I am Sarvesh Adhari and this is a simple CRUD application built using Reactjs and Nextjs. Database used is MongoDB.
        The links in the navbar are the basic functionalities of the application.<br/>
        Update and delete have been provided as buttons under respective tasks.
        The most recent tasks appear at the top.
        </p>
          
        <span>
          <b>Create</b> - This wil redirect you to a from where you can add a new task.
        </span>
        <br/>
        <span>
          <b>Read</b> - This will take you to a list of tasks to be done.
        </span>
        <br/>
        <span>
          <b>Edit</b> - This will take you to a form where you can update a previously entered task.
        </span>
        <br/>
        <span>
          <b>Delete</b> - This will take you to a page where you can delete a specific task.
        </span>
        
    </div>
  )
}
