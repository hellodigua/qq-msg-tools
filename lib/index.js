const path = require("path");
const { writeFile, readFile } = require('./utils');
const { convertMsgData } = require('./convert');

const convertTxt2JSON = async (inputFile) => {
  const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);
  const data = await readFile(inputPath);

  const { contactData, arrData } = convertMsgData(data);

  writeFile(outputPath, JSON.stringify({
    contactData,
    arrData
  }));
};

module.exports = {
  convertTxt2JSON
};
