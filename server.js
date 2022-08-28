const express = require('express');
const app = express();
const port = 8000;
const router = require('../db_crud with express/route/ router1');
app.use(express.json());

app.use('/',router)

app.listen(port,()=>{
    console.log(`Your server running on this port ${port}`);
})