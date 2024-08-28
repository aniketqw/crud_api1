import express from 'express';
import { v4 as uuidv4 }from 'uuid';
const router = express.Router();//fresh router instance

// mock database

let users = [
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
    const foundUser= users.find((user)=>user.id === id)
    res.send(foundUser)
});

//CREATE delete /user/:id
router.delete('/:id',(req,res) =>{
    const {id}=req.params;
    const {first_name}=req.params;
    users =users.filter((user) => user.id!== id)
    res.send(`${id} deleted successfuly with ${first_name} from database`);
});

export default router
// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';

// const router = express.Router();

// // Mock database
// let users = [
//     {
//         first_name: 'John',
//         last_name: 'Doe',
//     },
//     {
//         first_name: 'Alice',
//         last_name: 'Smith',
//     },
// ];

// // Adding users to our mock database
// router.post('/', (req, res) => {
//     const user = req.body;

//     users.push({ ...user, id: uuidv4() });

//     res.send(`${user.first_name} has been added to the Database`);
// });

// // Get all users
// router.get('/', (req, res) => {
//     res.send(users);
// });

// // Get a user by ID
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     const foundUser = users.find((user) => user.id === id);

//     if (foundUser) {
//         res.send(foundUser);
//     } else {
//         res.status(404).send('User not found');
//     }
// });

// // Delete a user by ID
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     const foundUser = users.find((user) => user.id === id);

//     if (foundUser) {
//         users = users.filter((user) => user.id !== id);
//         res.send(`${foundUser.first_name} has been successfully deleted from the database`);
//     } else {
//         res.status(404).send('User not found');
//     }
// });

// export default router;
