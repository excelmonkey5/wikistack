const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db, User, Page } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

db.authenticate().
then(() => {
  console.log('connected to the database');
})


const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}))

app.use("/wiki", wikiRouter);
app.use("/users", userRouter);


const PORT = 3000;

const init = async () => {
  await db.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

}

init();

app.get('/', (req, res) => {
  const html = `<html><head><link rel="stylesheet" href="/stylesheets/style.css"></head>hello world</html>`;
  res.send(html);
})





