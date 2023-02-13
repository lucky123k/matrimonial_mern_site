const mongoose = require("mongoose");
const dbUrl = ""
const conncetionParams = {
    useNewUrlParser :true,
    useUnifiedTopology : true
}
mongoose.connect(dbUrl, conncetionParams).then(() => {
    console.log("connected to databse");
}).catch((e) => {
    console.log(e);
})
