const jwt    = require('jsonwebtoken'); //used to decode jwt token
const User   = require('../model/user'); //user model

// create user 
module.exports.CreateUser = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email }); //checking if user already exists
        if (user){
            //if user exists
            return res.json(409, {
                message: 'User already exists!'
            });
        } else {
            user = await User.create(req.body); //creating a new user account
            return res.json(201, {
                message: 'User created successfully!',
                data: {
                    user:user,
                }
            })
        }
    } catch {
        //catching errors
        console.log('Internal server error!!');
        
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
}

//user login
module.exports.UserLogin = async function(req,res){
    try{
        //finding user 
        let user = await User.findOne({email: req.body.email});
        if(!user || user.password != req.body.password ){
            //if user dosen't exist or invalid password
            return res.json(401, {
                message: 'Invalid username/password'
            });
        }
        //if log in successfull return a new jwt token that expires in 2 hours
        return res.json(200, {
            message: 'Login successfull, JWT token sen\'t successfully, please keep it safe!',
            data: {
                //creating the new jwt token
                token: jwt.sign(user.toJSON(), 'NMaSNppZvKmDVqtVwaUWLBviPaO5qa9X', { expiresIn: '7200000' })
            }
        })

    } catch {
            //catching errors
            console.log('Internal Server Error!!');
            return res.json(500, {
                message: 'Internal Server Error'
            });
    }
}