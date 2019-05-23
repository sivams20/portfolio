const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/portfolio'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});
// Start the app by listening on the default Heroku port

app.post('/send', function (req, res) {
  console.log(req);
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '',
        pass: ''
    }
  });

  console.log('created');
  transporter.sendMail({
  from: '@gmail.com',
    to: '@gmail.com',
    subject: 'hello world!',
    text: 'hello world!'
  });
  
  });

app.listen(process.env.PORT || 8080);

