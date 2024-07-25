const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data');

const searchCreeds = (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  const files = fs.readdirSync(dataPath);
  const results = [];

  files.forEach(file => {
    try {
      const content = JSON.parse(fs.readFileSync(path.join(dataPath, file), 'utf-8'));

      const metadata = content.Metadata || {};
      const title = metadata.Title || '';
      const originStory = metadata.OriginStory || '';
      const authors = metadata.Authors || [];

      if (
        title.toLowerCase().includes(query.toLowerCase()) ||
        originStory.toLowerCase().includes(query.toLowerCase()) ||
        authors.some(author => author.toLowerCase().includes(query.toLowerCase()))
      ) {
        results.push({
          id: file.replace('.json', ''),
          title: title,
          year: metadata.Year || 'Unknown',
          format: metadata.CreedFormat || 'Unknown'
        });
      }
    } catch (err) {
      console.error(`Error reading or parsing file ${file}: ${err.message}`);
    }
  });

  res.status(200).json(results);
};

module.exports = { searchCreeds };