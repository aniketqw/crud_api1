import express from 'express';
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
//get set up route that respond to HTTP GET requests and  callback fuction (req,res) => {..}
router.get('/',(req,res) => {
    res.send(users);//to send response back to client
});

export default router
