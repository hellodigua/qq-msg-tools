const path = require("path");
const { unique, writeFile, readFile } = require('./utils');

const convertToJSON = async (inputFile) => {
  const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);

  const data = await readFile(inputPath);

  let stringData = data.toString();
  let arrData = [];
  let contactData = [];

  stringData.replace(/(?<date>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (?<name>\S+)(?<id>(\(\d{6,11}\)|<.+>))\r\n(?<content>.*)/g, (...args) => {
    arrData.push(args[8])
  });

  contactData = arrData.map(({ name, id }) => {
    return { name, id }
  })

  contactData = unique(contactData, 'id')

  const outputJSON = JSON.stringify({
    contactData,
    arrData
  })

  return writeFile(outputPath, outputJSON);
};

module.exports = {
  convertToJSON
};
