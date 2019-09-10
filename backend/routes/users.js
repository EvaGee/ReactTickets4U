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
               
        
app.post('/data', function(req, res){
	console.log(req.body); 
    var data = {event_description:req.body.event_description};
    var sql = 'INSERT INTO event_Assets SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({ 
		event_description: req.body.event_description,

	});
});
});

app.listen(3210, ()=>{
    console.log('Server listening at port 3210')
});