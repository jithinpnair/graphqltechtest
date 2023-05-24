const mongoose = require('mongoose');

const CanineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
    },
    breed: {
        type: String,
    }

});

const Canines = mongoose.model('canine', CanineSchema);
module.exports = Canines;