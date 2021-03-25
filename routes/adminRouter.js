const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers) //pour l'admin 
  .post(userController.createUser); //creation d'un compte

router
  .route('/:id')
  .get(userController.getUser) // pour l'admin 
  .patch(userController.updateUser) // user or admin 
  .delete(userController.deleteUser); // user or admin

module.exports = router;
