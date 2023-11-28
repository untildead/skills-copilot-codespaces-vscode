// Create web server
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create server
const app = express();
const server = http.createServer(app);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/comments', require('./routes/comments'));

// Start server
const port = 3002;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});