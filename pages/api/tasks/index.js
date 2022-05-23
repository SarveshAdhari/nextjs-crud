import dbConnect from "../../../utils/dbConnect"
import nc from 'next-connect'
import Task from '../../../models/Task'

dbConnect()

const handler = nc().post(async(req, res)=>{
    const {title, description} = req.body

    try{
        const newTask = new Task({title, description})
        await newTask.save()
        res.send('Task added successfully!')
    }
    catch(err){
        console.log(err)
        return res.status(404).json({message: 'something went wrong'})
    }
}).get(async(req, res)=>{

    try{
        const tasks = await Task.find()
        res.send(tasks)
    }
    catch{
        return res.status(400).json({message: 'something went wrong'})
    }
})

export default handler