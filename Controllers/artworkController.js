/*
const Artwork = require('../models/artwork');

const artworkController = {};

// Create a new artwork
artworkController.createArtwork = (req, res) => {
  const newArtwork = new Artwork({
    title: req.body.title,
    price: req.body.price,
    artist_id: req.body.artist_id,
    category_id: req.body.category_id
  });

  Artwork.create(newArtwork, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error creating artwork' });
    }
    return res.status(201).json({ success: true, artwork });
  });

};

// Get artwork by ID
artworkController.getArtworkById = (req, res) => {
  const artworkId = req.params.id;
 
  Artwork.findById(artworkId, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error finding artwork by ID' });
    }

    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
    }

    return res.status(200).json({ success: true, artwork });
  });
};
 
  Artwork.update(newArtwork, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error creating artwork' });
    }
    return res.status(201).json({ success: true, artwork });
  });
  artworkController.updateArtworkById = (req, res) => {
    const artworkId = req.params.id;
    const updatedFields = {
      title: req.body.title,
      price: req.body.price,
      artist_id: req.body.artist_id,
      category_id: req.body.category_id
    };
  Artwork.findByIdAndUpdate(artworkId, updatedFields, { new: true }, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error updating artwork' });
    }

    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
    }

    return res.status(200).json({ success: true, artwork });
  });
  // Delete artwork by ID
artworkController.deleteArtworkById = (req, res) => {
  const artworkId = req.params.id;

  Artwork.findByIdAndDelete(artworkId, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error deleting artwork' });
    }

    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
    }

    return res.status(200).json({ success: true, message: 'Artwork deleted successfully' });
  });

  
module.exports = artworkController;


*/


const Artwork = require('../models/artwork');

const artworkController = {};

// Create a new artwork
artworkController.createArtwork = (req, res) => {
  const newArtwork = new Artwork({
    title: req.body.title,
    price: req.body.price,
    artist_id: req.body.artist_id,
    category_id: req.body.category_id
  });
  

  Artwork.create(newArtwork, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error creating artwork' });
    }
    return res.status(201).json({ success: true, artwork });
  });
};

// Get artwork by ID
artworkController.getArtworkById = (req, res) => {
  const artworkId = req.params.id;
 
  Artwork.findById(artworkId, (err, artwork) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Error finding artwork by ID' });
    }

    if (!artwork) {
      return res.status(404).json({ success: false, error: 'Artwork not found' });
    }

    return res.status(200).json({ success: true, artwork });
  });
};



module.exports = artworkController;
