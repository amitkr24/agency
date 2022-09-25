const jwt     = require('jsonwebtoken'); //used to decode jwt token
const Agency  = require('../model/agency'); //Patient model
const Clients = require('../model/clients'); //Doctor model


//client create
module.exports.clientCreate = async function(req,res){
    // get param id 
    let agency_id = req.params.id;
    if(agency_id==undefined){
        return res.status(206).json({
            message: 'Incomplete data provided'
        });
    }
    try{
        let agency = await Agency.findById(req.params.id);

        // for validation
        let email =  await Clients.find({'email': req.body.email});
        let phone =  await Clients.find({'phone': req.body.phone});
        if(email.length>0){
            return res.status(401).json({
                message: 'email is already in use'
            });
        }
        if(phone.length>0){
            return res.status(401).json({
                message: 'phone number is already in use'
            });
        }
        //end validation
        
        //then client created
        if(agency){
            req.body.agency = agency_id;
            let client = await Clients.create(req.body);
            return res.status(200).json({
                message: 'client successfully Created',
                data:{
                    client:{
                        client: client,
                    }
                }
            })
        }
        else{
            return res.status(401).json({
                message: 'client is not Registered'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: 'Internal Server Error !'
        });
    }
}

//fetch all clients of a agency 
module.exports.clientList = async function(req, res){
    try{
        let client=await Clients.find({ agency:req.params.id }).populate('agency','name').sort({'total_bill':-1});
        return res.status(200).json({
            message:'All clients of the Agencies',
            data:{
                client
            },
        })
      }
      catch(err){
          return res.status(500).json({
          message:'Internal Server Error'
        })
      }
};

// client update 
module.exports.clientUpdate = async function(req,res){
    try{
        //find and update client
        let updated_data = await Clients.findByIdAndUpdate(req.params.id,req.body);
        console.log(updated_data);

        // return response message
         return res.status(200).json({
            message:'clients data updated successfully',

            data:{
                updated_data
            },
        })
    }catch(err){

        //return error if occur any
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}
