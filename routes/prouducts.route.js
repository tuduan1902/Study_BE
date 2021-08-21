const express = require('express');
const { InsertProductsData, FetchProductsData } = require('../service/products.service');

const router = express.Router();

// Khi user nhap url toi duong dan /product/insert => tự động kích hoạt hàm nhập với dữ liệu đã được set cứng.
router.get('/insert', async (req, res, next) => {
    await InsertProductsData();
});

// Khi user nhap url toi duong dan /product/fetch => tự động kích hoạt hàm gọi và gửi lên cho người dùng web
router.get('/fetch', async (req, res, next) => {
    const result = await FetchProductsData();
    res.send(result);
});

module.exports = router;