const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {v4: uuidv4 } = require('uuid');

const gameSchema=new Schema({
    gameid:{
        type:String,
        unique:true,
        default:uuidv4(),
    },
    gamers:[{
        id:{
            type:String,
            unique:true,
            trim:true,
            default:uuidv4(),
        },
        name:{
            type:String,
            trim:true,
            default:''
        }
    }],
})

module.exports=CreateGame=mongoose.model('createGame',gameSchema)