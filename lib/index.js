const fs = require("fs");
const path = require("path");

function getFileName(content) {
  const [, groupName = ''] = content.match(/消息对象:([^\n]+)/) || [];
  const date = new Date();

  return `${groupName}-${date.getTime()}`;
}


const convertToJSON = (inputFile) => {
  const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));
  const outputPath = path.join(path.resolve(__dirname), `result.json`);

  fs.readFile(inputPath, (err, data) => {
    if (err) {
      return console.error(err);
    }

    // Buffer to String
    let stringData = data.toString();

    let arrData = [];

    stringData.replace(/(?<date>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (?<name>\S+)(?<id>(\(\d{6,11}\)|<.+>))\n(?<content>.*)/g, (...args) => {
      arrData.push(args[8])
    });

    fs.writeFile(
      outputPath,
      JSON.stringify({
        arrData: arrData
      }, null, "\t"),
      "utf-8",
      error => {
        if (error) {
          throw error;
        }
      }
    );
  });
};

module.exports = {
  convertToJSON
};
