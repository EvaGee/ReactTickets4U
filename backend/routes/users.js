const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kenya@2030',
    database : 'tickets'
});

db.connect();

app.get('/users', function(req,res){
var sql = 'SELECT * FROM events';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.json(result);
});
});

app.get('/category', function(req,res){
    var sql = 'SELECT * FROM category';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    });

app.get('/data', function(req,res){
    var sql = 'SELECT * FROM event_Assets';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json(result);
    });
    });

app.get('/eventsTickets', function(req,res){
        var sql = 'SELECT * FROM event_tickets_types';
        db.query(sql, (err, result)=>{
            if(err) throw err;
            console.log(result);
            res.json(result);
        });
        });


        app.get('/ticketTypes', function(req,res){
            var sql = 'SELECT * FROM ticket_types';
            db.query(sql, (err, result)=>{
                if(err) throw err;
                console.log(result);
                res.json(result);
            });
            });
               
        
app.post('/register', function(req, res){
	console.log(req.body); 
    var data={
        user_name:req.body.user_name,
        user_email:req.body.user_email,
        user_phone:req.body.user_phone,
        user_password:req.body.user_password
    };
    var sql = 'INSERT INTO users ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
  
});
});

app.post('/events', function(req, res){
	console.log(req.body); 
    var data={
        event_title:req.body.title,
        event_coodinates:req.body.location,
        event_venue:req.body.venue,
        event_category_id:req.body.category,
        event_date:req.body.venue,
        end_date:req.body.date

    };
    var sql = 'INSERT INTO events ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
  
});
});
app.listen(3210, ()=>{
    console.log('Server listening at port 3210')
});