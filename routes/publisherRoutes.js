/**
 * TO GOD BE ALL THE GLORY
 * 09-SEP-2023
 * The file to handle the routing for all the requests coming to the Publishers controller.
 */

const express = require('express')
const router = express.Router()
const { fetchPublisher, fetchAllPublishers, setPublishers, updatePublishers, deletePublishers } = require('../controllers/v1.0/PublisherController')

// Chain the GET and SET methods to one route since both of their endpoints are similar i.e. (/)
router.route('/').get(fetchAllPublishers).post(setPublishers)

// Chain the UPDATE and DELETE methods to one route since both of their endpoints are similar i.e. (/:id)
router.route('/:id').get(fetchPublisher).put(updatePublishers).delete(deletePublishers)

module.exports = router