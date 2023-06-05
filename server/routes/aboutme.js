const express = require("express")
const recordRoutes = express.Router()
const dbo = require("../db/conn")

// This section will help you get yourself information
recordRoutes.route("/aboutme").get(async function (req, res) {
    const db_connect = dbo.getDb()
    try {
        const result = await db_connect.collection("about_me").find({}).toArray()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = recordRoutes