const mongoose=require('mongoose');
require('dotenv').config();

const host=process.env.MONGO_HOST;
const port=process.env.MONGO_PORT;
const db=process.env.DB_NAME;

/**
 * Function to connect the database
 *  */ 
exports.mongoConnect = () => {
const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
mongoose.connect(mongoStringConnection,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("success, mongo db connected"))
    .catch(()=>console.log("error en base de datos: "+ err));
}
