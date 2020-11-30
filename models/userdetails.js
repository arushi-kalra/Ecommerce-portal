var mongoose = require('mongoose');

var userdataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    username: { type: String, required:true},
    firstname: { type: String, required:true},
    lastname: { type: String, required:true},
    dateofbirth: { type: Date, required:true},
    mobileno: { type: Number, required:true}
});

module.exports = mongoose.model("UserData", userdataSchema);