//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productID: Number,
    price: Number,
    quantity: Number
});

module.exports= mongoose.model('product', ProductSchema);