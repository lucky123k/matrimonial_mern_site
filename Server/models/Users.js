const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const Bcrypt = require("bcrypt")
require("../conn")
const UserModel = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim : true
    },
    email:{
        type: String,
        required : true,
        trim : true
    },
    password:{
        type: String,
        required : true,
        trim : true
    },
    confrmpswd:{
        type: String,
        required : true,
        trim : true
    },
    contact:{
        type: Number,
        required : true,
        trim : true
    },
    gender:{
        type: String,
        required : true,
        trim : true
    },
    state:{
        type: String,
        required : true,
        trim : true
    },
    age:{
        type: Number,
        required : true,
        trim : true
    },
    tokens : [{
        token : {
        type : String,
        required : true
    }}],
    // DOB:{
    //     type: Date,
    //     required : true,
    //     trim : true
    // }
})


// UserModel.methods.genratetoken = async function(){
//     try {
//         const tokengenrated = jwt.sign({_id : this._id}, "mynameisprateekkumartiwari")
//         console.log(tokengenrated);
//         this.tokens = this.tokens.concat({token : tokengenrated});
//         await this.save();
//         return tokengenrated
//     } catch (error) {
//         console.log(error);
//     }
// }

UserModel.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});


const User = mongoose.model("SignupData", UserModel)
module.exports = User;