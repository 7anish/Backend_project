const {Router} = require('express');
const {handleCreateUser , handleLoginUser , handleUpdateProfile} = require('../Controllers/UserController')
const route = Router()
const {uploatUserPhoto}  = require('../Config/MulterConfig')
const checkauthentication = require('../Middleware/auth')

route.post('/createnewuser' , uploatUserPhoto.single('profilephoto') , handleCreateUser);
route.post('/login' , handleLoginUser );
route.patch('/updateuser/:id' ,checkauthentication ,uploatUserPhoto.single('profilephoto') , handleUpdateProfile)

module.exports = route  