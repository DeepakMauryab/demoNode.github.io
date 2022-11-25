const mongoose= require("mongoose");
const bcrypt= require("bcryptjs");

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    conPassword:{
        type:String,
        required:true,
        trim:true
    }
});

projectSchema.pre("save", async function(next){
    if(this.isModified("password")){
    this.password= await bcrypt.hash(this.password, 10);
    this.conPassword= undefined;
    }
    next();
})

const projectData= new mongoose.model("ProjectData", projectSchema);

module.exports= projectData;