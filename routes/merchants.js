const express = require('express');
const router = express.Router();
const merchants = require('../controllers/merchants');


router.get('/getAllMerchants/:limit&:offset', merchants.getAllMerchants);
router.get('/getAllMerchants', merchants.getAllMerchants);
router.get('/getMerchantById/:id', merchants.getMerchantById);
router.post('/createMerchant', merchants.createMerchant);
router.post('/upsertMerchant', merchants.upsertMerchant);
router.delete('/deleteMerchant/:id', merchants.deleteMerchant);
module.exports = router;
