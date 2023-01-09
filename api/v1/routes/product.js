const router = require('express').Router();
const {
    GetALLProducts,
    DeleteProductById,
    UpdateProductById,
    GetProductById,
    AddProduct
} = require('../controllers/product');

//הצג את כל המוצרים
router.get("/",GetALLProducts);

//הצג מוצר לפי קוד
router.get("/:",GetProductById);

//מחק מוצר לפי קוד
router.delete("/:",DeleteProductById);

//עדכן מוצר לפי קוד
router.patch("/:",UpdateProductById);

//צור מוצר חדש
router.post("/",AddProduct);

module.exports = router;