const express=require("express")
const   { v4: uuidv4 }  =require("uuid")
let GetBD=require("../models/BD")

let getBD=new GetBD()

class UserController{


    create(request,response){
        const { name,price,product } = request.body
    
        const db=getBD.create({
            id:uuidv4(),
            name,
            price,
            product
        })
        
        return response.json({db})
    }


    update(request,response){
        const { id }=request.params
        const { name,price,product, }=request.body
        const filter=getBD.select().filter((res)=>res.id==id)
        const position=getBD.findById(filter[0])
   
        if(position<0)return response.send("Erro elemento não existe")
   
        const res=getBD.update(position,{
            id:uuidv4(),
            name,
            price,
            product
         })
        return response.send(res)
        
   }

   delete(request,response){
    const { id }=request.params
    const filter=getBD.select().filter((res)=>res.id==id)
    const position=getBD.findById(filter[0])
    const res=getBD.delete(position)
    if(position<0)return response.send("Erro elemento não existe")
    return response.send(res)
    
}

}

module.exports=UserController