const express = require('express');
const router = express.Router();
const issuancehistory = require('../controllers/issuancehistory');

router.get('/getAllIssuancehistories', issuancehistory.getAllIssuancehistories);
router.get('/getIssuancehistoryById/:id', issuancehistory.getIssuancehistoryById);
router.post('/createIssuancehistory', issuancehistory.createIssuancehistory);
router.post('/upsertIssuancehistory', issuancehistory.upsertIssuancehistory);
router.delete('/deleteIssuancehistory/:id', issuancehistory.deleteIssuancehistory);
module.exports = router;
