var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'page' });
});

//----------------------------------------------------------------------------------

/* task 3 - 1 */
var count = 0;
let time = new Date();
router.get('/last.txt', function (req, res, next) {
  if (count > 0) {
    res.send(String(time));
  } else {
    res.send("");
  }
  count++;
  time = new Date();
});

//----------------------------------------------------------------------------------

/* task 3 - 2 */
var colorIndex = 0;
router.get('/color.html', function (req, res, next) {
  colorIndex ++;
  let color;

  switch (colorIndex) {
    case (1):
      color = "red";
      break;
    case (2):
      color = "yellow";
      break;
    case (3):
      color = "green";
      break;
    default:
      color = "blue";
      colorIndex = 0;
      break;
  }

  

  res.send(`<html lang="en">
    <head>
        <title>page</title>
    </head>
    <body>
        <h1 style="color: ${color}">${color}</h1>
    </body>
    </html>
`);
});

//----------------------------------------------------------------------------------

/* task 3 - 4 */
let check = 0;
router.get('/first.html', function (req, res, next) {
  if (check == 0) {
    check ++;
    res.send(`<html lang="en">
    <head>
        <title>page</title>
    </head>
    <body>
        <h1>welcome</h1>
        <p><a href="/main.html">/main.html page</a></p>
    </body>
    </html>
`);
  } else {
    res.redirect('/main.html');
  }
});

router.get('/main.html', function (req, res, next) {
  switch (check) {
    case (0):
      res.redirect('/first.html');
      break;
    default:
      res.send(`<html lang="en">
      <head>
          <title>page</title>
      </head>
      <body>
          <h1>My main site</h1>
          <p>cachow i made a random website lets go!!!!!</p>
      </body>
      </html>
  `);
  }
});

//----------------------------------------------------------------------------------

/* task 4 - 2 */
var colorITask4 = 0;
router.get('/color.txt', function (req, res, next) {
  colorITask4 ++;
  switch (colorITask4) {
    case (1):
      res.send("red");
      break;
    case (2):
      res.send("yellow");
      break;
    case (3):
      res.send("green");
      break;
    default:
      res.send("blue");
      colorITask4 = 0;
      break;
  }
});

//----------------------------------------------------------------------------------

/* task 4 - 4 */
router.get('/contact.ajax', function (req, res, next) {
  const emailAddress = "lijosanthoshstudent@gmail.com";
  res.send(`<a href="${emailAddress}">${emailAddress}</a>`);
});

router.get('/search.ajax', function (req, res, next) {
  res.send(`<form>
  <input type="text"><br>
  <button type="button">Search</button>
  </form>`);
});

//----------------------------------------------------------------------------------

/* task 4 - 5 */
var task5Check = 0;
router.get('/accept', function (req, res, next) {
  task5Check = 1;
  res.status(200).end();
});

router.get('/content.ajax', function (req, res, next) {
  if (task5Check == 0) {
    res.status(403).end();
  } else {
    res.send(`<p> i am new to this H</p>
    <p>plz help me</p>`);
  }
});



module.exports = router;
