const {User} = require('../models');
const {comparePass} = require('../helpers/bcrypt');
const {genToken} = require('../helpers/jwt');
const {OAuth2Client} = require('google-auth-library');

class UserController {
    
    static create(req,res,next) {
        const {email,password} = req.body;
        const newObj = {email,password};
        User.create(newObj)
        .then(user => {
            res.status(201).json({msg:'successfully create new user'});
        })
        .catch(err => {
            next(err);
        })
    }

    static login(req,res,next) {
        User.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            if(!user) {
                throw ({msg:`invalid email or password`,code:401});
            }
            let comparison = comparePass(req.body.password,user.password);
            if(!comparison) {
                throw ({msg:`invalid email or password`,code:401})
            }
            let payload = {
                id:user.id,
                email:user.email
            }
            let token = genToken(payload);
            res.status(200).json({token});
        })
        .catch(err => {
            next(err);
        })
    }

    static googleSign(req,res,next) {
        let email = null;
        const client = new OAuth2Client("752137312998-3tnsnm0ci53910fgr3ud1uoormpcs6l1.apps.googleusercontent.com");
        client.verifyIdToken({
            idToken: req.body.tokenGoogle,
            audience: "752137312998-3tnsnm0ci53910fgr3ud1uoormpcs6l1.apps.googleusercontent.com",  
        })
        .then(ticket => {
            email = ticket.getPayload().email
            return User.findOne({
                where:{email}
            })
        })
        .then(user => {
            if (user) return user

            return User.create({
                email : email,
                password : 'rahasiaaja' 
            })
            
        })
        .then(user => {
            let payload = {
                id : user.id,
                email : user.email
            }
            let token = genToken(payload);
            res.status(200).json({token});
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
    }
}

module.exports = UserController;