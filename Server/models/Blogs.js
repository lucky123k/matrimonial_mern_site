const mongoose = require("mongoose")
require("../conn")
const BlogModel = new mongoose.Schema({
    mainheading:{
        type: String,
        required : true,

    },
    about:{
        type: String,
        required : true,

    },
    author:{
        type: String,
        required : true,

    },
    // date:{
    //     type: Date,
    //     required : true,
    //     trim : true
    // },
    img:{
        type: String,
        required : true,
  
    },
    description:{
        type: String,
        required : true,
        // trim : true
    },
    firstHead:{
        type: String,
        required : true,
        // trim : true
    },
    firstdesc:{
        type: String,
        required : true,
        // trim : true
    },
    secondHead:{
        type: String,
        required : true,
        // trim : true
    },
    seconddesc:{
        type: String,
        required : true,
        // trim : true
    },
    ending:{
        type: String,
        required : true,
        // trim : true
    },

})
const BlogBuddy = mongoose.model("BlogData", BlogModel)
module.exports = BlogBuddy;