import mongoose from "mongoose";

//1st step: Create a schema for the Note model
//2nd step: create a model based off that schema

//1.schema:
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },

},
{timestamps: true} // by default mongoose will add createdAt and updatedAt fields to the schema
 );


//2.model:
const Note = mongoose.model("Note", noteSchema);  
export default Note;
