const mongoose = require("mongoose")

// mongodb+srv://ke8920603717:tooweak@cohortdatabase.j9iuzc6.mongodb.net/

mongoose.connect("mongodb+srv://ke8920603717:tooweak@cohortdatabase.j9iuzc6.mongodb.net/todo-list")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})