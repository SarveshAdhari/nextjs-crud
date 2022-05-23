const mongoose = require('mongoose')

async function dbConnect(){
    try{
        await mongoose.connect('mongodb+srv://root:5785@cluster0.5yfz6.mongodb.net/crud',{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Connected to MongoDB')
    }
    catch(error){
        console.log(error)
    }
}
export default dbConnect