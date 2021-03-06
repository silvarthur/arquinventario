var express = require('express')
  , router = express.Router();
var mongoose = require('mongoose');
var loginController = require('../controllers/loginController');

router.post('/', function(req, res){
  loginController.login(req, function(response){
    if(response.status == 200){
      res.status(200).send(response.user);
    }else{
      res.status(401).send('Unauthorized');
    }
  });
});

module.exports = router
