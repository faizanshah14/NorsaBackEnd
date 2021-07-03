const express = require('express');
const router = express.Router();
const userAccess = require('../controllers/userAccess');


router.post('/checkAdminStatus', userAccess.checkAdminStatus);
<<<<<<< HEAD
router.post('/changeUserStatus', userAccess.changeUserStatus);
=======
router.post('/makeUserAdmin', userAccess.makeUserAdmin); 
router.post('/dormantUser', userAccess.dormantUser);
>>>>>>> f950c2486569ab3583474286a6c343a4e751c3ce
module.exports = router;
