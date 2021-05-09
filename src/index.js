const express =require("express")
const { Route } =require("./route")

const app=express()

app.use(express.json())
app.use(Route)

app.listen(3333,()=>{
    console.log("aplication is running❤")
})