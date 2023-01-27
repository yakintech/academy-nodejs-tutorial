const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const categorySchema = Schema({
    name: String,
    description: String
})

const category = mongoose.model('Category', categorySchema)

module.exports = {
    category
}
