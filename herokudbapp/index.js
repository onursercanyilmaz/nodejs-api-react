const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const {Client} = require('pg')
const cors = require('cors')

app.use(cors())

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


app.get('/getUser', (req, rest) => {

    client.query('SELECT * FROM users;',(err,res)=>{
        if(!err){
            console.log(res.rows);
            rest.json(res.rows)
        }
        else{
            console.log(err.message);
        }
        client.end;
    })
})

app.get('/getUser/:email/:password', (req, rest) => {


    const email = req.params.email
    const password = req.params.password



    client.query('SELECT * FROM users WHERE (EMAIL='+email+' AND PASSWORD='+password+');',(err,res)=>{
        if(!err){
            console.log(res.rows);
            rest.json(res.rows)
        }
        else{
            console.log("None");
        }
        client.end;
    })
})


app.get('/getUser/:name', (req, rest) => {


    const name = req.params.name


    client.query('SELECT * FROM users WHERE name='+name+';',(err,res)=>{
        if(!err){
            console.log(res.rows);
            rest.json(res.rows)
        }
        else{
            console.log("Nope");
        }
        client.end;
    })
})


app.get('/createUser/:name/:email/:password', (req, rest) => {

    const name = req.params.name
    const email = req.params.email
    const password = req.params.password



    client.query('INSERT INTO users (NAME,EMAIL,PASSWORD)\n' +
        'VALUES ( \''+name+'\', \''+email+'\', \''+password+'\' );',(err,res)=>{
        if(!err){
            console.log(res.rows);
            rest.json(res.rows)
        }
        else{
            console.log("None");
        }
        client.end;
    })
})


app.get('/updateUser/:id/:name', (req, rest) => {

    const id = req.params.id
    const name = req.params.name
    const email = req.params.email
    const password = req.params.password



    client.query('UPDATE users SET name='+name+'\n' +
        'WHERE id='+id+';',(err,res)=>{
        if(!err){
            console.log(res.rows);
            rest.json(res.rows)
        }
        else{
            console.log("None");
        }
        client.end;
    })
})


app.get('/deleteUser/:id', (req, rest) => {

    const id = req.params.id


    client.query('DELETE FROM users WHERE id='+id+';',(err,res)=>{
        if(!err){
            console.log(res.rows);
            rest.json(res.rows)
            return true
        }
        else{
            console.log("None");

        }
        client.end;
        return false
    })
})





app.listen(process.env.PORT || 8000, () => console.log(`server running on PORT ${PORT}`))