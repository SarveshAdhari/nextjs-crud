import dbConnect from "../../../utils/dbConnect"
import nc from 'next-connect'
import Task from '../../../models/Task'

dbConnect()

const handler = nc().get((async(req, res)=>{

    try{
        const task = await Task.findOne({_id: req.query.id})
        res.send(task)
    }
    catch{
        return res.status(400).json({message: 'something went wrong'})
    }
})).put((async(req, res)=>{

    try {
        const task = await Task.findOne({_id: req.query.id})
        task.title = req.body.title
        task.description = req.body.description

        await task.save()
        res.send('Post Updated Successfully')
        

    } catch (error) {
        return res.status(400).json({message: 'something went wrong'})
    }

})).delete((async(req, res)=>{

    try {
        await Task.findOneAndDelete({_id: req.query.id})
        res.send('Task deleted successfully')
    } catch (error) {
        return res.status(400).json({message: 'something went wrong'})
    }

}))

export default handler