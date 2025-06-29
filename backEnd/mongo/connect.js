import mongoose from "mongoose";

const url ='mongodb://localhost:27017/todo_app'

mongoose.connect(url);
const connectToMongoDB=mongoose.connection;
connectToMongoDB.on('open',()=>{
    console.log("connected..")
})

export default connectToMongoDB;
