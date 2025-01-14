const mongoose = require('mongoose')


const productScheam = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ourPrice: {
        type: Number,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    productimage: [
        {
            imageurl: {
                type: String
            }
        }
    ],
    inventory : {
        type : Number,
        required : true
    },
    featured : {
        type : Boolean,
        default : false
    }
})


const product = mongoose.model('product', productScheam)

module.exports = product
