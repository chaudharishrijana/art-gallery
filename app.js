const express = require('express');
const mysql = require('mysql');
const db = require('./config/db');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./middleware/errorHandler');
const artistRoute = require('./routes/artistRoute');
const categoryRoute = require('./routes/categoryRoute');
const artworkRoute = require('./routes/artworkRoute');
const orderRoute = require('./routes/orderRoute');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

require('dotenv').config();

// MySQL Connection
// Middleware
app.use(bodyParser.json());
// app.use(cors());
const whitelist = ["http://localhost:3001"]; 

const corsOptions = { 
    origin: (origin, callback) => { 
        if (!origin || whitelist.includes(origin)) { 
            callback(null, true); 
        } else { 
            callback(new Error("Not allowed by CORS")); 
        } 
    }, 
    credentials: true, 
}; 
app.use(cors(corsOptions));
// Routes
app.use('/user', userRoute);
app.use('/artist', artistRoute);
app.use('/category', categoryRoute);
app.use('/artwork', artworkRoute);
app.use('/orders', orderRoute);


// Route to fetch artworks from the database
app.get('/ecommerce web app', (req, res) => {
  db.query('SELECT * FROM user', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
  db.query('SELECT * FROM artist', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });

  db.query('SELECT * FROM category', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
  db.query('SELECT * FROM artwork', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });

  db.query('SELECT * FROM orders', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });

  db.query('SELECT * FROM artwork WHERE artwork_id = ?', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });

  db.query('SELECT * FROM orders WHERE order_id = ?', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });

});    

/*
// Update an artwork
app.put('/api/artwork/:artworkId', (req, res) => {
  const { title, description, price } = req.body;
  const artworkId = req.params.artworkId;

  db.query('UPDATE artwork SET title = ?, description = ?, price = ? WHERE artwork_id = ?', 
    [title, description, price, artworkId], 
    (error, results) => {
      if (error) {
        console.error('Error updating artwork:', error);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Artwork updated successfully' });
      }
    }
  );
});

// Delete an artwork
app.delete('/api/artwork/:artworkId', (req, res) => {
  const artworkId = req.params.artworkId;

  db.query('DELETE FROM artwork WHERE artwork_id = ?', artworkId, (error, results) => {
    if (error) {
      console.error('Error deleting artwork:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json({ message: 'Artwork deleted successfully' });
    }
  });
});
*/
// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
