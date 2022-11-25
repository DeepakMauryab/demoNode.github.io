const mongoose= require("mongoose")

const DBConnect= "mongodb+srv://Deepak:DEEPAK@cluster0.7thxqgo.mongodb.net/ProjectData?retryWrites=true&w=majority"
const mongooseOptions = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
};

mongoose.connect(DBConnect, mongooseOptions).then(()=>{
    console.log("connected database");
}).catch((e)=>{
    console.log("not connected");
});

