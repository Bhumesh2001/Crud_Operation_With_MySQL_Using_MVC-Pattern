const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1',
    database:'bhumesh'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('database connected.....');
    var sql = "create table customers(name varchar(200),age int,city varchar(150))"
    db.query(sql,(err)=>{
        if(err){
            console.log('Table allready exist.....');
        }else{
            console.log('Table created successfully......');
        }
    })
})
module.exports = db