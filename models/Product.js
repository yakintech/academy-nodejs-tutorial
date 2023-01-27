const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const productSchema = Schema({
    name: String,
    unitPrice: Number,
    unitsInStock: {
        type: Number,
        required: true
    },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
})

const product = mongoose.model('Product', productSchema)

module.exports = {
    product
}