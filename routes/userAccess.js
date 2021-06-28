const express = require('express');
const router = express.Router();
const userAccess = require('../controllers/userAccess');


router.post('/checkAdminStatus', userAccess.checkAdminStatus);
router.post('/makeUserAdmin', userAccess.makeUserAdmin);
module.exports = router;
