const { register, login, setProfile, getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setProfile/:id", setProfile);
router.get("/allusers/:id", getAllUsers);

module.exports = router;