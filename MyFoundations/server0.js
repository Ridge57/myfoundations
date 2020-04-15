const express = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : '127.0.0.1',
  port:'3308',
  user     : 'root',
  password : '',
  database : 'db_myfoundations'
});

// Starting our app.
const app = express();
app.use(bodyParser.json());

// Creating a GET route that returns data from the 'users' table.
app.get('/reportinglist', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM tb_reportinglist', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Creating a POST route that insert new report in report list table
app.post('/newreport', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('INSERT INTO tb_reportinglist(date, media, description, status, responsable, commentaires) VALUES ("'+ req.body.date + '","' + req.body.media + '","' + req.body.description + '","' + req.body.status + '","'+ req.body.responsable + '","' + req.body.commentaires + '")', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.status(201).json({message:'objet enregistré'});
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});
