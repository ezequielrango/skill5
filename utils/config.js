const dotenv =  require('dotenv')

dotenv.config()


module.exports = {
    PASS: process.env.PASS,
    USER: process.env.USER
}

