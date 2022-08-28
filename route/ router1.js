const express = require('express');
const router = express.Router();
const userController = require('../controller/user_Controller');
router.post('/user',userController.createUser);
router.put('/updateUser/:id',userController.updateUser) 
router.get('/readUser/:id',userController.readUser) 
router.delete('/deleteUser/:id',userController.deleteUser)
router.get('/showAllData',userController.readAllData)
module.exports = router