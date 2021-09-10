const mongoose = require('mongoose');

// Create product table..
// Khung sườn cho Object trong các bản
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,  // Bắt buộc phải có trong object
    },
    description: {
        type: String,
        require: false, // Ko bắt buộc
    },
});

/*
 * Table -> Object -> Fields
 * Khai báo từ trong ra ngoài fields -> object -> table
*/
// Table
const ProductsModel = mongoose.model('products', productSchema);

module.exports = ProductsModel;