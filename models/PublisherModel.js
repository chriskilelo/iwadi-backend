/**
 * TO GOD BE ALL THE GLORY 
 * 09-SEP-2023
 */

const mongoose = require('mongoose')

// Create the schema
const publisherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide the publisher\'s name.'],
        },
        phone_number: {
            type: String,
            required: [true, 'Please provide the phone number.'],
        },
        email_address: {
            type: String,
            required: [true, 'Please provide the email address.'],
        },
        is_active: {
            type: String,
            required: [true, ''],
        },
    },
    {
        timestamps: true,
    }
)

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = mongoose.model('Publisher', publisherSchema)
