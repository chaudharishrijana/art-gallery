// controllers/authController.js
//const User = require('../models/users');
/*
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// controllers/authController.js
exports.register = (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, role } = req.body;

  // Trim the password before hashing
  const trimmedPassword = password.trim();

  // Hash the password
  bcrypt.hash(trimmedPassword, 10, (hashErr, hashedPassword) => {
    if (hashErr) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword, // Use the hashed password
      role,
    });

    User.create(newUser, (err, user) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.status(201).json({ message: 'User registered successfully', user });
    });
  });
};



exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) {
      console.error('Error finding user by email:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Debugging statements
    console.log('Provided email:', email);
    console.log('Provided password:', password);
    console.log('Stored hashed password:', user.password);

    // Ensure both password and hashed password are strings
    const providedPassword = String(password.trim());
    const storedPassword = String(user.password).trim();

    bcrypt.compare(providedPassword, storedPassword, (bcryptErr, passwordMatch) => {
      if (bcryptErr) {
        console.error('Bcrypt error during comparison:', bcryptErr);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('Password match result:', passwordMatch);

      if (!passwordMatch) {
        console.log('Password does not match');
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }

      // Password is correct, generate a JWT token for authentication
      const token = jwt.sign({ userId: user.id, email: user.email }, 'your_secret_key', {
        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
      });

      console.log('Login successful');
      res.status(200).json({ token, userId: user.id, email: user.email });
    });
  });
};
*/



// controllers/authController.js
const User = require('../models/users');
const jwt = require('jsonwebtoken');

// controllers/authController.js
exports.register = (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, role } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    password, // Store the password as is (not recommended)
    role,
  });

  User.create(newUser, (err, user) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.status(201).json({ message: 'User registered successfully', user });
  });
};



exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) {
      console.error('Error finding user by email:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Debugging statements
    console.log('Provided email:', email);
    console.log('Provided password:', password);
    console.log('Stored password:', user.password);

    // Ensure both password and stored password are strings
   /* const providedPassword = String(password.trim());
    const storedPassword = String(user.password).trim();*/

    const providedPassword = String(password);
    const storedPassword = String(user.password);

    if (providedPassword !== storedPassword) {
      console.log('Password does not match');
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Password is correct, generate a JWT token for authentication
    const token = jwt.sign({ userId: user.id, email: user.email }, 'your_secret_key', {
      expiresIn: '1h', // Token expires in 1 hour, adjust as needed
    });

    console.log('Login successful');
    res.status(200).json({ token, userId: user.id, email: user.email });
  });
};
