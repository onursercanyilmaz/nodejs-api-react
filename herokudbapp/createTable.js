const {Client} = require('pg')

const client = new Client({

    host:"YOUR_INFO",
    user:"YOUR_INFO",
    port:"YOUR_INFO",
    password:"YOUR_INFO",
    database:"YOUR_INFO",
    connectionString: process.env.DATABASE_URL, //dont put your URL here
    ssl: {
        rejectUnauthorized: false
    }

})

client.connect();

client.query('CREATE TABLE users(\n' +
    '   ID  SERIAL PRIMARY KEY  NOT NULL,\n' +
    '   NAME TEXT  NOT NULL,\n' +
    '   EMAIL TEXT  NOT NULL,\n' +
    '   PASSWORD TEXT NOT NULL\n' +
    ');',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})