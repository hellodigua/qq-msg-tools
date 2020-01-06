const fs = require("fs");
const path = require("path");

const convertToJSON = (inputFile, outputFile = "output.json") => {
  const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));
  const outputPath = path.join(path.resolve(__dirname, "../"), "output.json");

  fs.readFile(inputPath, (err, data) => {
    if (err) {
      return console.error(err);
    }

    // buffer >> string
    let stringData = data.toString();

    let arrData = stringData.split("\r\n");
    arrData = arrData.filter(item => item);
    console.log(arrData);
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
