// require mongoose
const mongoose = require("mongoose");

// create schema
const clientSchema = mongoose.Schema({
    //name of the client
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

    //email id of the clients
    email: {
        type: String,
        unique: true,
        required: true
    },

    // total bill of the client
    total_bill: {
        type: String,
    },

    agency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency",
        required:true,
    }
},{
    timestamps: true
})


const Client = mongoose.model("Client", clientSchema);

module.exports = Client;