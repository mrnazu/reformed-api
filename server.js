const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const creedRoutes = require('./routes/creedRoutes');
const metadataRoutes = require('./routes/metadataRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());

// API routes
app.use('/api/creeds', creedRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/api/search', searchRoutes);

// Default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
