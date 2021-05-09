const db=[]
class BD{
   create(value){
     return db.push(value)
   }

   delete(value){
     return db.splice(value,1)
   }

   update(position,value){
     return db[position]=value
   }
   findById(index){
     return db.indexOf(index)
   }

   select(){
     return db
   }
}

module.exports=BD