const router = require("express").Router();
const userList = require("../views/userList");

router.get("/", (req, res, next) => {
   res.redirect('/wiki');
});


// router.get("/", (req, res, next) => {
//     const data = User.findAll();
//     res.send(data.rows[0]);
// });

module.exports = router;
