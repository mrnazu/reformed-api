const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data');

const getAllCreeds = (req, res) => {
  const files = fs.readdirSync(dataPath);
  const creeds = files.map(file => {
    const content = JSON.parse(fs.readFileSync(path.join(dataPath, file), 'utf8'));
    return {
      id: path.basename(file, '.json'),
      title: content.Metadata.Title,
      year: content.Metadata.Year,
      format: content.Metadata.CreedFormat
    };
  });
  res.json(creeds);
};

const getCreedById = (req, res) => {
  const id = req.params.id;
  const filePath = path.join(dataPath, `${id}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.json(content);
  } else {
    res.status(404).send('Creed not found');
  }
};

const getQuestionById = (req, res) => {
  const id = req.params.id;
  const questionNumber = req.params.questionNumber;
  const filePath = path.join(dataPath, `${id}.json`);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const question = content.Data.find(item => item.Number == questionNumber);
    if (question) {
      res.json(question);
    } else {
      res.status(404).send('Question not found');
    }
  } else {
    res.status(404).send('Creed not found');
  }
};

module.exports = { getAllCreeds, getCreedById, getQuestionById };