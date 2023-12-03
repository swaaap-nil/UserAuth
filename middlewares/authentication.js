exports.verifyTokenMiddleWare = async(req,res,next)=> {

    console.log("trying to verify user");
    //TODO verify user here
//     var encrypted=extractToken(req);
//     if(!encrypted) {
//        return res.status(404).json({error: "Auth token Missing"});
//     }

//     try {
//            const decipher= await crypto.createDecipheriv(ALGO,toString(process.env.secretkey));
//            var token=await decipher.update(encrypted,'hex','utf8');
//            token+=decipher.final('utf8');
           
//            var id=token.split('.')[0];
//            var exp=token.split('.')[1];
   
//            if(Date.now()>exp) {
//                return res.status(401).json({error: "Token Expired !!"});
//            }
//            await User.findOne({'_id': id , 'tokens.token' : encrypted})
//            .then((user)=>{
//            if(!user) {
//                return res.status(401).json({error: "Unauthorized !!"});
//            }
//                req.user=user;
//                req.token=encrypted;
//                return next();
//            }) 
//            .catch((err)=> {
//            return  res.status(500).json(err);
//            })
//     }
//   catch(err) {
//       return res.status(401).json({error : "Invalid Token !!"});
//   }
    next();
    
}

exports.checkIfRegisteredUserMiddleWare = async(req,res,next)=>{

    //check if user is verified
    console.log("verified user");
    next();
}