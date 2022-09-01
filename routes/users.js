var express = require('express');
var router = express.Router();

const {login,register,profile, update} = require('../controllers/usersController')
const {uploadUsers} = require('../middlewares/uploadFiles')
/*  users  */
router
  .get('/register', register ) //  http://user/register
  .get('/login', login)      //  http://user/login
  .get('/profile', profile)  //  http://user/profile
  .put('/update/:id', uploadUsers.single('avatar'), update)              


module.exports = router;
