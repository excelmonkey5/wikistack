const router = require("express").Router();
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send('got to get /wiki');
});

router.post("/", (req, res, next) => {
  res.send('got to post /wiki/');

});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
