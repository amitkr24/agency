const mongoose = require('mongoose');

const AgencySchema = mongoose.Schema({
    //name of the patient
    name:{
        type:String,
        required:true
    },
    
    //phone number of the agency, it must be a 10 digit number and unique
    phone: {
        type: Number,
        unique: true,
        required: true,
        maxlength: 10
    },

    //address1 of agency with required
    address1: {
        type: String,
        required: true,
    },

    //address2 of the agency
    address2: {
        type: String,
    },

    //state of the agency
    state: {
        type: String,
    },

    //city of the agency
    city: {
        type: String,
    },
    
    //relation with client
    clients:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Client"
    }]
},{
    timestamps: true
});

const Agency = mongoose.model('Agency', AgencySchema); //modelling the schema
module.exports = Agency;