const express= require("express");
const { registerUser, loginUser,logoutUser,dumpUsers,verifyEmail} = require("../models/user");
const authenticate = require("../middlewares/authentication")
const router = express.Router();    

 router.get("/signup",registerUser);
 
 
  router.get("/verify-email",verifyEmail);


router.get("/login",authenticate.checkIfRegisteredUserMiddleWare,loginUser);      


 router.get("/logout",authenticate.verifyTokenMiddleWare,logoutUser);

 
//  router.get("/dump",authenticate.verifyAdminMiddleware,authenticate.verifyTokenMiddleWare,dumpUsers);  //only admin can dump all users

module.exports =router;
