// models/User.js
const mysql = require('mysql');
/*
const db = require('../config/db'); // Assuming the MySQL connection is established in app.js
const bcrypt = require('bcrypt'); // Import the bcrypt module

const User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.phoneNumber = user.phoneNumber;
  this.password = user.password;
  this.role = user.role || 'user';
};



User.create = (newUser, result) => { 
  // Hash the password before storing it in the database
  bcrypt.hash(newUser.password, 10, (hashErr, hashedPassword) => {
    if (hashErr) {
      console.error('Error hashing password:', hashErr);
      result(hashErr, null);
      return;
    }
    // Update the newUser object with the hashed password
    newUser.password = hashedPassword;   

    // Proceed to insert the user into the database
    db.query('INSERT INTO user SET ?', newUser, (err, res) => {
      if (err) {
        console.error('Error creating user:', err);
        result(err, null);
        return;
      }

      console.log('Created user:', { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  });
};

User.findByEmail = (email, result) => {
  db.query('SELECT * FROM user WHERE email = ?', [email], (err, res) => {
    if (err) {
      console.error('Error finding user by email:', err);
      result(err, null);
      return;
    }

    if (res.length) {
      const user = res[0];

      // Return the user object with the hashed password
      const userWithHashedPassword = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password, // Ensure it's the hashed password from the database
        role: user.role,
      };

      result(null, userWithHashedPassword);
      return;
    }

    // User not found
    result(null, null);
  });
};

module.exports = User;    */

// models/User.js
const db = require('../config/db'); // Assuming the MySQL connection is established in app.js

const User = function (user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.email = user.email;
  this.phoneNumber = user.phoneNumber;
  this.password = user.password;
  this.role = user.role || 'user';
};

User.create = (newUser, result) => {
  db.query('INSERT INTO user SET ?', newUser, (err, res) => {
    if (err) {
      console.error('Error creating user:', err);
      result(err, null);
      return;
    }

    console.log('Created user:', { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findByEmail = (email, result) => {
  db.query('SELECT * FROM user WHERE email = ?', [email], (err, res) => {
    if (err) {
      console.error('Error finding user by email:', err);
      result(err, null);
      return;
    }

    if (res.length) {
      const user = res[0];

      // Return the user object without modifying the password
      const userWithoutHashedPassword = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password, // Password is not hashed
        role: user.role,
      };

      result(null, userWithoutHashedPassword);
      return;
    }

    // User not found
    result(null, null);
  });
};

module.exports = User;
