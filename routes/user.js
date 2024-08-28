import express from 'express';
import { v4 as uuidv4 }from 'uuid';
const router = express.Router();//fresh router instance

// mock database

const users = [
    {
        first_name:'John',
        last_name:'Doe',
    },
    {
        first_name:'Alice',
        last_name:'Smith',
    },
];

// Adding users to our mock database
router.post('/', (req, res) => {//IF WRITE /users it will become /users/users hence use /
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
}) ;

//get set up route that respond to HTTP GET requests and  callback fuction (req,res) => {..}
router.get('/',(req,res) => {
    res.send(users);//to send response back to client
});

router.get('/:id',(req,res) =>{
    const {id} =req.params;
    const foundUser= user.find((user)=>user.id=== id)
    res.send(foundUser)
})

export default router
