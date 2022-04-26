'strict mode'

import express from 'express';
import { v4 as uuidv4 } from 'uuid';



const router = express.Router();


const users = [
 
]

//All routes in here are startuing with /users
 router.get('/', (req, res) =>{
     console.log(users)

     res.send(users)
 });

 router.post('/', (req,res)=>{
   
     let user = req.body;
    
     
     users.push({...user, id:uuidv4()})

     res.send(`User with the name ${user.firstName} added to the database!`)
 })
 router.get('/:id', (req,send)=>{
     const {id} = (req.params)
     const foundUser= users.find((users) => user.id ===id);
     res.send(foundUser)
 })
router.delete('/',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=>user.id !==id);
    res.send(`user with ${id}  deleted from the database`)
});
router.patch('/:id',(req,res)=>{
    const {id} = req.params;

    const{firstName,lastName,age} = req.body;

    const user = user.find((user)=>user.id ===id);

    if(firstName){
        user.firstName = firstName
    }
    if(lastName){
        user.lastName = lastName
    }
    if(age){
        user.age = age
    }

   res.send(`user with ${id}  has been updated`)

})
 export default router;