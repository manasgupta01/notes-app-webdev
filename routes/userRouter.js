const router = require('express').Router()
const useCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

//Register User
router.post('/register',useCtrl.registerUser)

// Login user
router.post('/login',useCtrl.loginUser)

// verify token
router.get('/verify',auth, useCtrl.VerifiedToken)


module.exports = router