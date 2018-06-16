var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678a",
    database: "onedottwomedia"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});
router.get('/contactInfo', function(req, res, next) {
	con.connect(function(err) {
		con.query('select * from contactusinfo where idContactUsInfo=1', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
	});
    
});

router.get('/map', function(req, res, next) {
	con.connect(function(err) {
		con.query('select addres from contactusinfo where idContactUsInfo=1', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
	});
    
});
// app.post('/data', function(req, res){
//     var username=req.body.name;
//     connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
//         if(err) throw err;
//             console.log("1 record inserted");
//         });
//     res.send(username);
//  con.query("INSERT INTO contactusform (name, email, message, phoneNumber, messageContent) VALUES (?,?,?,?,?)",req.body.name.toString(),req.body.email.toString(),req.body.message.toString(),req.body.phonrNumber.toString(),req.body.messageContent.toString(), function (err, result) {

// });
router.post('/form', function(req, res, next) {
	con.connect(function(err) {
		console.log('here in post nodejs');
  if (err) throw err;
  con.query("INSERT INTO contactusform (name, email, message, phoneNumber, messageContent) VALUES ('Menna','menna@','bla','11','bbuun')", function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.send(JSON.stringify(results));
  });
});
    
});

module.exports = router;