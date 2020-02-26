var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MessageSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

});

// EventSchema.index({name: "text", description: "text", address: "text"});

var Messages = mongoose.model("Messages", MessageSchema);

module.exports = Messages;