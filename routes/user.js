const router = require("express").Router();
const userList = require("../views/userList");

router.get("/", (req, res, next) => {
    res.send('user list placeholder');
});

module.exports = router;
