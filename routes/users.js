var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotalySecretKey'); 
// const encryptedString = cryptr.encrypt('bacon');
// const decryptedString = cryptr.decrypt(encryptedString); 
// console.log(encryptedString); 