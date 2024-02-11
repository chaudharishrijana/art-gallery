const express = require('express');
const router = express.Router();
const artworkController = require('../Controllers/artworkController');

// Route to create a new artwork
router.post('/artwork', artworkController.createArtwork);

// Route to get artwork by ID
router.get('/artwork/:id', artworkController.getArtworkById);

// Route to update artwork by ID
//router.put('/artwork/:id', artworkController.updateArtworkById);

// Route to delete artwork by ID
//router.delete('/artwork/:id', artworkController.deleteArtworkById);




module.exports = router;
