const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data');

const getAllCreeds = (req, res) => {
  fs.readdir(dataPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read creeds data' });
    }

    const creeds = files.map(file => {
      const filePath = path.join(dataPath, file);
      const rawData = fs.readFileSync(filePath);
      const creed = JSON.parse(rawData);
      return {
        id: file.replace('.json', ''),
        title: creed.Metadata.Title,
        year: creed.Metadata.Year,
        format: creed.Metadata.CreedFormat,
      };
    });

    res.json(creeds);
  });
};

const getCreedById = (req, res) => {
  const creedId = req.params.id;
  const filePath = path.join(dataPath, `${creedId}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Creed not found' });
  }

  const rawData = fs.readFileSync(filePath);
  const creed = JSON.parse(rawData);
  res.json(creed);
};

module.exports = { getAllCreeds, getCreedById };