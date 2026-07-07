const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>My Portfolio</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});