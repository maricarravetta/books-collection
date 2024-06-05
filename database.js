const mongoose = require("mongoose")
require("dotenv").config()

async function conectDatabase() {
    try {
        console.log("Connection with database is running, please wait.")

        await mongoose.connect(process.env.MONGO_URL)

        console.log("Connection with database is completed!")
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectDatabase