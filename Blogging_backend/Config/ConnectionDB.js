const mongoose = require('mongoose');

const handleconnection = (url)=>{
    mongoose.connect(url)
    .then(()=> console.log("Database Connected Sucessfully"))
    .catch((e)=> console.log("Database Connection Failed"))
}

module.exports = {
    handleconnection
}