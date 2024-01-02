const express = require("express")
const router = express.Router()
const cors = require("cors")
const {test, registerUser, loginUser}  = require("../controllers/authControlles")
const {bringEvent, assignToCalendar} = require("../controllers/calController.js")

//middlewate
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)

router.get("/",test)
router.post("/login", loginUser)
router.post("/register",registerUser)

router.post("/calendar", bringEvent)
router.post("/create-event", assignToCalendar)


module.exports = router