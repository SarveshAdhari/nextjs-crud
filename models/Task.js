const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String
})

export default mongoose.models.Task || mongoose.model('Task', taskSchema)