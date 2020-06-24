const express = require('express');
const router = express.Router();

const usersconrtoller = require('../controllers/user_controller');

router.get('/profile', usersconrtoller.profile);



module.exports = router;