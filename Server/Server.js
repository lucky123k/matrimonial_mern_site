var express = require('express');
var app = express();
const conn = require("./conn")
const MyUser = require("./models/Users")
const Blog = require("./models/Blogs")
const { collection } = require("./models/Users")
app.use(express.json())
app.use(express.urlencoded({extended: false}));
var cookieParser = require("cookie-parser");
app.use(cookieParser())
const BodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const Cors = require("cors")
app.use(Cors({origin : ["http://localhost:3000"], credentials : true}))



app.get('/', function (req, res) {
   
})

app.post("/login", async(req, res) => {
   // console.log(req.body);
   const name2 = req.body.Name;
   const password = req.body.Passwd;
   console.log(name2);
   const dataget = await MyUser.find({name : req.body.Name})
   console.log(dataget[0]);
   const passget = dataget[0].password
   // console.log(dataget[0]);
   const ismatch = await bcrypt.compare(password, passget)
   console.log(ismatch);
   // const ismatch = bcrypt.compare(password, passget)
   if (ismatch) {
       console.log("login successfull");
       const tokenlogin = jwt.sign({_id : dataget._id}, "mynameisprateekkumartiwari")
       console.log("token here for login : " + tokenlogin);
       res.cookie("logincookie", tokenlogin)
       console.log("cookie done");
       console.log("login success");
       res.send({"login" : "true"})
   }   
   else{
      console.log("login failed... password didnt match");
   }
})
app.post("/register", async(req, res) => {
   const firstuser = new MyUser();
   const tokengenrated = jwt.sign({_id : this._id}, "mynameisprateekkumartiwari")
   console.log(tokengenrated);
   res.cookie("authtoken", tokengenrated)
   console.log("cookie done while sign up");
   firstuser.name = req.body.NAME,
   firstuser.tokens = firstuser.tokens.concat({token : tokengenrated}),
   firstuser.email = req.body.EMAIL,
   firstuser.password = req.body.PASSWORD,
   firstuser.confrmpswd = req.body.CONFIRMPASSWORD,
   firstuser.contact = req.body.CONTACT,
   firstuser.gender = req.body.GENDER,
   firstuser.state= req.body.STATE,
   firstuser.age = req.body.AGE,
   firstuser.save().then(() => {
        console.log("saved successfully");
        res.send({"msg" : "success"})
    }).catch((e) => {
        console.log("some unknown error occurred");
    })
    console.log(req.body);
})

app.post("/CreateBlog", async(req, res) => {
   const newblog = new Blog();
   newblog.mainheading = req.body.Heading,
   newblog.about = req.body.About,
   newblog.author = req.body.Author,
   newblog.img = req.body.Imag,
   newblog.description = req.body.Desc,
   newblog.firstHead = req.body.FirstHead,
   // FirstHead, FirstDesc, SecondHead, SecondDesc, End
   // Heading, About, Author, Imag, Desc, FirstHead, FirstDesc, SecondHead, SecondDesc, End
   newblog.firstdesc = req.body.FirstDesc,
   newblog.secondHead = req.body.SecondHead,
   newblog.seconddesc = req.body.SecondDesc,
   newblog.ending = req.body.End
   await newblog.save()
   res.send({"msg" : "done"});
})

app.get("/fetchBlogs", async(req, res) => {
   const dataget = await Blog.find();
   res.send(dataget)
})

app.get("/Blogs/:id", async(req, res) => {
   // console.log(req.query.id);
   const dataget = await Blog.findOne({_id : req.params.id});
   // console.log(req.params.id);
   res.send(dataget)

})

app.get("/getUsers", async(req, res) => {
   const name2 = req.query.name
   const age2 = req.query.age
   if(name2){
      const got = await MyUser.find({state : name2});
      res.send(got);
   }
   else if(age2){
      const got = await MyUser.find({age : age2});
      res.send(got);
   }
   else if(name2 && age2){
      const got = await MyUser.find({state : name2, age : age2});
      res.send(got);
   }
   else{
      const got = await MyUser.find();
      res.send(got);
   }

})
app.listen(8081, function () {
   console.log("Example app listening at http://localhost:8081")
})