const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ke8920603717:Coadm%402134@cohortdatabase.j9iuzc6.mongodb.net/week4_jWTwithtMongo")

const User = mongoose.model('Users', {name: String , email: String,
password: String});

const user = new User({name: "ketan singh",
email: "ke@gmail.com",
password: '123456'});
user.save().then(()=> console.log('bark'));