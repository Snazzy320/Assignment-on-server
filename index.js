const express = require("express")
const dotenv = require("dotenv")
dotenv.config()


const app = express()

const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log("server started running....")
})



app.get("/strings", (request, response)=>{
    response.json("My name is Akor Emmanuel Owoicho")
})

app.get("/objects", (request, response)=>{
    response.json({name: "Akor Emmanuel", country: "Nigerian", state: "Benue", age: 26})
})


app.get("/arrays", (request, response)=>{
    response.json([
        { name: "Akor Emmanuel", country: "Nigerian", state: "Benue", age: 75 },
        { name: "John Joseph", country: "Nigerian", state: "Kastina", age: 45 },
        { name: "Solomon Victor", country: "Nigerian", state: "Kano", age: 36 },
        { name: "Joy John", country: "Nigerian", state: "Lagos", age: 23 },
        { name: "David Peter", country: "Nigerian", state: "Kaduna", age: 54 }
    ])
    
})
