const { User } = require('../models');
const { comparePass } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static async signup(req,res){
        let { email, password } = req.body;
        
        const newUser = {
            email, password
        }
        try { 
            const data = await User.create(newUser)
            res.status(201).json(data)
        } catch (error){
            res.status(400).json(error)
        }
    }

    static async login(req,res){
        try { 
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (!user) { 
                res.status(401).json({
                    message: 'Wrong email/password'
                })
            }
            else if (!comparePass(req.body.password, user.password)){ 
                res.status(401).json({
                    message: 'Wrong email/password'
                })
            } else {
                const token = signToken({
                    id: user.id,
                    email: user.email
                })

                res.status(200).json({token});
            }
        } catch (error){
            console.log(error)
            res.status(500).json(error)
        }
    }

    static googleLogin(req, res, next){
        let { google_token } = req.body;
        const client = new OAuth2Client(process.env.CLIENT_ID);
        let email = "";

        client.verifyIdToken({
            idToken: google_token,
            audience: process.env.CLIENT_ID
        })
        .then(ticket => {
            let payload = ticket.getPayload();
            return User.findOne({where : { email:payload.email}})
        })
        .then(user=> {
            if(user){

            } else {
                var userObj = {
                    email,
                    password:'Apaan sih'
                }
                return User.create(userObj)
            }
        })
        .then(dataUser => {
            let token = signToken({id: dataUser.id, email: dataUser.email})
            return res.status(200).json({token})
        })
    }
}

module.exports = UserController;