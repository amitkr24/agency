const jwt    = require('jsonwebtoken'); //used to decode jwt token
const agency = require('../model/agency'); //Agency model

// create agency 
module.exports.createAgency = async function (req, res) {
    try {  
        let agency_check = await agency.findOne({ name: req.body.name }); //checking if agency already exists

        // phone number validation
        let phone =  await Clients.find({'phone': req.body.phone});
        if(phone.length>0){
            return res.status(401).json({
                message: 'phone number is already in use'
            });
        }

        //agency exists
        if (agency_check){
            //if agency exists
            return res.json(409, {
                message: 'Agency name already exists!'
            });
        } else {
            agency_data = await agency.create(req.body); //creating a new doctor account
            return res.json(201, {
                message: 'Agency created successfully!',
                data: {
                    agency_data:agency_data,
                }
            })
        }
    } catch {
        //catching errors
        //console.log('Internal server error!!');
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
}

//fetch all agencies 
module.exports.agencyList = async function(req, res){
    try{
        let all_agency=await agency.find({}).sort("createdAt");
        
        return res.status(200).json({
            data:{
                all_agency
            },
            message:'All agencies',
        
        })
      }
      catch(err){
          return res.status(500).json({
          message:'Internal Server Error'
        })
      }
};

