const db = require('../config/db'); // Assuming the MySQL connection is established in app.js

const Artist = function (artist) {
  this.firstName = artist.firstName;
  this.lastName = artist.lastName;
  this.email = artist.email;
  this.phoneNumber = artist.phoneNumber;
  this.password = artist.password;
  this.role = artist.role ;
};

Artist.create = (newArtist, result) => {
  db.query('INSERT INTO artist SET ?', newArtist, (err, res) => {
    if (err) {
      console.error('Error creating artist:', err);
      result(err, null);
      return;
    }

    console.log('Created artist:', { id: res.insertId, ...newArtist });
    result(null, { id: res.insertId, ...newArtist });
  });
};

Artist.findByEmail = (email, result) => {
  db.query('SELECT * FROM artist WHERE email = ?', [email], (err, res) => {
    if (err) {
      console.error('Error finding artist by email:', err);
      result(err, null);
      return;
    }

    if (res.length) {
      const artist = res[0];

      // Return the user object without modifying the password
      const artistWithoutHashedPassword = {
        id: artist.id,
        firstName: artist.firstName,
        lastName: artist.lastName,
        email: artist.email,
        phoneNumber: artist.phoneNumber,
        password: artist.password, // Password is not hashed
        role: artist.role,
      };

      result(null, artistWithoutHashedPassword);
      return;
    }

    // User not found
    result(null, null);
  });
};

module.exports = Artist;