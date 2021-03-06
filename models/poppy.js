const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    FirstName: {
        type: String,
    },
    LastName: {
        type: String,
    },
    Company: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Zip: {
        type: Number,
    },
    Phone: Number,
    Website: String,
    google_map: String,
}, {
    timestamps: true
});

personSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('Poppy', personSchema);