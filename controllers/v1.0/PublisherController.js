/**
 * TO GOD BE ALL THE GLORY
 * 09-SEP-2023
 * This controller will handle all Publisher related operations.
 */

const mongooseODM = require('mongoose')
const Publisher = require('../../models/PublisherModel')

/**
 * @desc    Retrieve all the publishers saved in the database.
 * @route   GET /api/v1.0/publishers
 * @access  Private
 */
const fetchAllPublishers = async (req, res) => {
    try {
        // Fetch all the publisher records
        const allPublishers = await Publisher.find()
        res.status(200).json(allPublishers)

    } catch (error) {
        console.log(error)
    }
}

/**
 * @desc    Retrieve a single/specific publisher from the database.
 * @route   GET /api/v1.0/publishers/:id
 * @access  Private
 */
const fetchPublisher = async (req, res) => {
    try {
        // Check whether the id passed in is a valid MongoDB object ID
        if (mongooseODM.Types.ObjectId.isValid(req.params.id) === false){
            // Means the ID is NOT valid. Compose an error message for throwing below
            let errorMessage = 'The ID provided is not a valid MongoDB Object ID'
            // Print the message on the console
            console.log('\n\nThe ID provided: ' .bgRed +  req.params.id.bold.bgRed + ' is not a valid MongoDB Object ID.\n'.bgRed);
            // Abort the transaction and throw the error with stack trace
            throw new Error(errorMessage)
        }
        // Means the object ID is valid, proceed to fetch the record
        const singlePublisher = await Publisher.findById(req.params.id).exec()
        // Append the HTTP status code and convert the response to JSON
        res.status(200).json(singlePublisher)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @desc    Insert a new publisher into the database
 * @route   POST /api/v1.0/publishers
 * @access  Private
 */
const setPublishers = async (req, res) => {
    try {
        response = { "message": "Inside setPublisher" }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @desc    Update a publisher whose ID has been specified
 * @route   PUT /api_v1.0/publishers/:id
 * @access  Private
 */
const updatePublishers = async (req, res) => {
    try {
        response = { "message": "Inside updatePublisher" }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

/**
 * @desc    Delete the publisher whose ID has been specified
 * @route   DELETE /api_v1.0/publishers/:id
 * @access  Private
 */
const deletePublishers = async (req, res) => {
    try {
        response = { "message": "Inside deletePublishers" }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    fetchAllPublishers,
    fetchPublisher,
    setPublishers,
    updatePublishers,
    deletePublishers
}