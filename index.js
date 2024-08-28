import express from 'express';
import bodyParser from 'body-parser';//allow to take in incoming POST request 

const app =express();
const PORT = 5001;

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));