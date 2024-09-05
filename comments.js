// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Create port
const port = 3000;
// 4. Create route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. Listen to port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// 6. Run server
// node comments.js
// Access http://localhost:3000