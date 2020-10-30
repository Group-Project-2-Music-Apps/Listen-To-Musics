const {User} = require('../models');
const {comparePass} = require('../helpers/bcrypt');
const {genToken} = require('../helpers/jwt');
const {OAuth2Client} = require('google-auth-library');

class UserController {
    
    static create(req,res,next) {
        const { email,password } = req.body;
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

    static googleSign(req, res, next) {
        let { google_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID);
        verify()
        async function verify() {
            try {
                const ticket = await client.verifyIdToken({
                    idToken: google_token,
                    audience: process.env.CLIENT_ID,
                });
                const payload = ticket.getPayload();
                const user = await User.findOne({
                    where: {
                        email: payload.email
                    }
                })
                if (!user) {
                    user = await User.create({
                        email: payload.email,
                        password: google_token
                    })
                }
                let token = genToken({ id: user.id, email: user.email })
                res.status(200).json({ token })
            } catch (err) {
                next(err)
            }
        }
    }

}

module.exports = UserController;