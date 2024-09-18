const {Router} = require('express');
const {handleCreateUser , handleLoginUser} = require('../Controllers/UserController')
const route = Router()

route.post('/createnewuser' , handleCreateUser);
route.post('/login' , handleLoginUser );

module.exports = route