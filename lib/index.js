const fs = require("fs");
const path = require("path");

function getFileName(content) {
  const [, groupName = ''] = content.match(/消息对象:([^\n]+)/) || [];
  const date = new Date();

  // return `${groupName}-${date.getTime()}`;
  return groupName;
}

const convertToJSON = (inputFile, outputFile = "output.json") => {
  const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));

  fs.readFile(inputPath, (err, data) => {
    if (err) {
      return console.error(err);
    }

    // buffer >> string
    let stringData = data.toString();

    let arrData = stringData.split("\n");
    arrData = arrData.filter(item => item);

    const fileName = getFileName(arrData[4]);
    const outputPath = path.join(path.resolve(__dirname), `${fileName}.json`);
    // console.log(arrData);
    // let jsonData = JSON.parse(data.toString());

    fs.writeFile(
      outputPath,
      JSON.stringify(arrData, null, "\t"),
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
