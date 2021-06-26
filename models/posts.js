import mongoose, { Schema } from 'mongoose'

const MODEL_POST = "PostID"

const schema = new Schema(
    {
    id : {
        type : String,
        require : true,

    },
    title : {
        type : String,
        require : false,
    },
    tags : {
        type : Array,
        require : false,
    },
    sticky : {
        type : Boolean,
        require : false,
    },
    date : {
        type : Date,
        require : true,
        default: Date.now()
    }
})

export default mongoose.model[MODEL_POST]||mongoose.model(MODEL_POST,schema,"posts");