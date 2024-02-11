
// controllers/authController.js
const Artist = require('../models/artist');
const jwt = require('jsonwebtoken');


// controllers/authController.js/*

exports.register = (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, role } = req.body;

  const newArtist = new Artist({
    firstName,
    lastName,
    email,
    phoneNumber,
    password, // Store the password as is (not recommended)
    role,
  });

  Artist.create(newArtist, (err, artist) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.status(201).json({ message: 'Artist registered successfully', artist });
  });
};

exports.registerPage = (req, res) => {
  console.log(req.query);
  data={
    name: req.query.artist,
  };
  res.render('artist/test',data);
};

exports.loginPage = (req, res) => {
  return res.view('test.html');
}

exports.login = (req, res) => {
  const { email, password } = req.body;

  Artist.findByEmail(email, (err, artist) => {
    if (err) {
      console.error('Error finding artist by email:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (!artist) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Debugging statements
    console.log('Provided email:', email);
    console.log('Provided password:', password);
    console.log('Stored password:', artist.password);

    // Ensure both password and stored password are strings
   /* const providedPassword = String(password.trim());
    const storedPassword = String(user.password).trim();*/

    const providedPassword = String(password);
    const storedPassword = String(artist.password);

    if (providedPassword !== storedPassword) {
      console.log('Password does not match');
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Password is correct, generate a JWT token for authentication
    const token = jwt.sign({ artistId: artist.id, email: artist.email }, 'your_secret_key', {
      expiresIn: '1h', // Token expires in 1 hour, adjust as needed
    });

    console.log('Login successful');
    res.status(200).json({ token, artistId: artist.id, email: artist.email });
  });
};

