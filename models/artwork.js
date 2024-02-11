const db = require('../config/db'); // Assuming the MySQL connection is established in app.js
const Artwork = function (artwork) {
  this.artwork_id = artwork.artwork_id;
  this.title = artwork.title;
  this.price = artwork.price;
  this.artist_id = artwork.artist_id;
  this.category_id = artwork.category_id;
};

Artwork.create = (newArtwork, result) => {
    db.query('INSERT INTO artwork SET ?', newArtwork, (err, res) => {
      if (err) {
        console.error('Error creating artwork:', err);
        result(err, null);
        return;
      }
  
      console.log('Created artwork:', { id: res.insertId, ...newArtwork });
      result(null, { id: res.insertId, ...newArtwork });
    });
  };
  
    Artwork.findById = (id, result) => {
      db.query('SELECT * FROM artwork WHERE artwork_id = ?', [id], (err, res) => {
        if (err) {
          console.error('Error finding artwork by id:', err);
          result(err, null);
          return;
        }
    
        if (res.length) {
          // Artwork found
          result(null, res[0]); // Return the first artwork found
          return;
        }
    
        // Artwork not found
        result({ message: 'Artwork not found' }, null);
      });
  };

/*
  Artwork.update = (artwork, result) => {
    db.query(
      'UPDATE artwork SET title = ?, price = ?, artist_id = ?, category_id = ? WHERE artwork_id = ?',
      [artwork.title, artwork.price, artwork.artist_id, artwork.category_id, id],
      (err, res) => {
        if (err) {
          console.error('Error updating artwork:', err);
          result(err, null);
          return;
        }  
        console.log('Updated artwork:', { id: id, ...artwork });
        result(null, { id: id, ...artwork });
      }
    );
  };
  
  Artwork.remove = (id, result) => {
    db.query('DELETE FROM artwork WHERE artwork_id = ?', id, (err, res) => {
      if (err) {
        console.error('Error deleting artwork:', err);
        result(err, null);
        return;
      }
  
      if (res.affectedRows == 0) {
        // Artwork not found with the given id
        result({ message: 'Artwork not found' }, null);
        return;
      }
  
      console.log('Deleted artwork with id:', id);
      result(null, res);
    });
  };
  
*/
  
  module.exports = Artwork;


