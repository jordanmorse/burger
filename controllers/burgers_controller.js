const express = require("express")
const burgers = require("../models/burger.js")
const router = express.Router()


router.get("/", function(req, res) {
    burgers.selectAll(function 
})

module.exports = router


