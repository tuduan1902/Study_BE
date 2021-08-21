const ProductsModel = require('../models/product');


// Muốn đánh dấu bằng await thì phải đặt nó trong async, ví câu lệnh await chỉ được thao tác dưới ền
// nên phải được nạp vào Promise bằng câu lệnh async thì mới được gọi.
async function InsertProductsData() {
    const product = new ProductsModel({
        name: 'Pen',
        description: 'This is a pen, not a pencil',
    });

    // Đánh dấu dòng code sẽ được mang ra ngoài proj và chuyển đến bên thứ 3 (database)
    await product.save().then(res => console.log('Da Luu Thanh Cong!!'));
}

async function FetchProductsData() {
    // Đánh dấu bằng await
    const product = await ProductsModel.find({ name: 'Pen' });
    
    return product;
}

module.exports = {
    InsertProductsData,
    FetchProductsData,
}