const db = require('../connection/create_connection')
const createUser =  (req,res)=>{
    const data = {
        name:req.body.name,
        age:req.body.age,
        city:req.body.city,
        id:req.body.id
    }
    const query = 'insert into customers set ?';
    db.query(query,data,(err,data)=>{
        if(err){
            console.log(err);
            res.send({messege:err})
        }
        console.log(data);
        res.json({data:'data insert successfully...'})
    })
}
const readUser=(req,res)=>{
    try {
        const sql=`select * from customers where id=${req.params.id}`;
        db.query(sql,(err,data)=>{
            if (data != 0){
                console.log(data);
                res.send(data)
            }else{
                res.send('user not found')
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}
const readAllData=(req,res)=>{
    const sql=`select * from customers`;
    db.query(sql,(err,data)=>{
        if (err){
            console.log(err);
            res.send({message:err})
        }
        console.log(data);
        res.send(data)
    })
}
const updateUser=(req,res)=>{
    try {
        const data={
            name:req.body.name,
            age:req.body.age,
            city:req.body.city,
            id:req.body.id
        }
        const sql=`update customers set name='${req.body.name}',age='${req.body.age}',city='${req.body.city}',id=${req.body.id} where id = ${req.params.id}`;
        db.query(sql ,data,(err,data)=>{
            if (data == undefined){
                console.log('user data not found');
                res.json({messege:"user data not found"})
            }else{
                console.log(data);
                res.json({data:'update  successfully!'})
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}
const deleteUser=(req,res)=>{
    try {
        const sql=`delete from customers where id=${req.params.id}`;
        db.query(sql,(err,data)=>{
            console.log(data);
            if (data != 0){
                console.log('data deleted successfully....');
                res.send('data deleted successfully....');
            }else{
                console.log('user not found');
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {createUser,updateUser,readUser,deleteUser,readAllData}