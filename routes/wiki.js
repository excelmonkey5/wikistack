const router = require("express").Router();
const client = require("../db");

router.get("/", (req, res, next) => {
  res.send('got to get /wiki');
});

router.post("/", (req, res, next) => {
  res.send('got to post /wiki/');

});

router.get('/add', (req, res, next) => {
  res.send('got to GET /wiki/add');
});

modules.exports = router;
