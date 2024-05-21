const mongoose = require('mongoose')


const ConnectDB = async () => {
    console.log(typeof(process.env.MONGO_URI))
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = ConnectDB