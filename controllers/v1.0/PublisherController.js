/**
 * TO GOD BE ALL THE GLORY
 * 09-SEP-2023
 * This controller will handle all Publisher related operations.
 */

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
        // Fetch a single the publisher record
        const singlePublisher = await Publisher.findById(req.params.id).exec()
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