const {Router} = require('express');
const {handleCreateUser , handleLoginUser} = require('../Controllers/UserController')
const route = Router()
const {uploatUserPhoto}  = require('../Config/MulterConfig')

route.post('/createnewuser' , uploatUserPhoto.single('profilephoto') , handleCreateUser);
route.post('/login' , handleLoginUser );

module.exports = route  