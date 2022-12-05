const express = require("express")
const app = express();
const bodypaser = require("body-parser")
app.use(express.json())
app.use(bodypaser.urlencoded({
     extended: true
}))

const PORT = process.env.PORT || 3000
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://karan:karanarora@cluster0.ujsaxn6.mongodb.net/?retryWrites=true&w=majorit', {
          useNewUrlParser: true,
          useUnifiedTopology: true
     },
     (err) => {
          if (err) {
               console.log(err)
          } else {
               console.log("connected in database")
          }
     }
)

app.listen(PORT, () => {
     console.log("listening at 3000")
})
app.get("/", (req, res) => {
     res.sendFile(__dirname + "/index1.html")
     console.log("step -1 root")
})
app.get("/form", (req, res) => {
     res.sendFile(__dirname + "/form.html")
     console.log("step -2 form page get")
})
app.post("/form", (req, res) => {
     res.sendFile(__dirname + "/thankyou.html")
     let a = req.body.one;
     console.log(a)
     console.log("send to thankyou")
})