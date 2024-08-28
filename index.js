import express from 'express';
import bodyParser from 'body-parser';//allow to take in incoming POST request 
import userRoutes from './routes/user.js';
const app =express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/users',userRoutes);

app.get('/',(req,res) =>{
   // console.log('[GET ROUTE] ');
    res.send('hello from hompage ');

})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));