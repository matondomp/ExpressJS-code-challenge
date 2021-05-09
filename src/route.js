const express=require("express")
 const UserController=require("./controller/UserController")
 let userController=new UserController()
 let GetBD=require("./models/BD")
const getBD=new GetBD()
const Route=express()



Route.get("/",(request,response)=>{
    return response.json({
        "lista":getBD.select()
    })
})

Route.post("/createUser",userController.create)

Route.delete("/removeUser/:id",userController.delete)

Route.put("/alter/:id",userController.update)

module.exports={
   Route
}