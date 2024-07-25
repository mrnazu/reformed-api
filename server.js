const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const creedRoutes = require('./routes/creedRoutes');
const metadataRoutes = require('./routes/metadataRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());

app.use('/api/creeds', creedRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/api/search', searchRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
