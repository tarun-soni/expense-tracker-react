const dotenv = require('dotenv')
const mongoose = require('mongoose');
//specifying path of env
dotenv.config({path:'./config/config.env'})
const MONGO_URI = process.env.MONGO_URI


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`Mongo CONNECTED: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`'error in conection :>> ',${error.message}`.red);
        process.exit(1)
    }
}

module.exports  = connectDB;