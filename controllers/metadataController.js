const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data');

const getAllMetadata = (req, res) => {
  const files = fs.readdirSync(dataPath);
  const metadata = files.map(file => {
    const content = JSON.parse(fs.readFileSync(path.join(dataPath, file), 'utf-8'));
    return {
      id: file.replace('.json', ''),
      title: content.Metadata.Title,
      alternativeTitles: content.Metadata.AlternativeTitles,
      year: content.Metadata.Year,
      authors: content.Metadata.Authors,
      location: content.Metadata.Location,
      originalLanguage: content.Metadata.OriginalLanguage,
      originStory: content.Metadata.OriginStory,
      sourceUrl: content.Metadata.SourceUrl,
      sourceAttribution: content.Metadata.SourceAttribution,
      creedFormat: content.Metadata.CreedFormat
    };
  });
  res.status(200).json(metadata);
};

const getMetadataById = (req, res) => {
  const creedId = req.params.id;
  const filePath = path.join(dataPath, `${creedId}.json`);

  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.status(200).json(content.Metadata);
  } else {
    res.status(404).json({ message: 'Metadata not found' });
  }
};

module.exports = { getAllMetadata, getMetadataById };