const path = require("path");
const { writeFile, readFile } = require('./utils');
const { convertMsgData } = require('./convert');
const getRank = require('./get-rank');

/**
 * 返回一个高阶函数，将传入函数的第一个参数（默认为文件地址）解析为JSON
 * @param {*} func
 */
const getJSON = (func) => {
  return async function (...args) {
    const context = this;
    const [inputFile] = args;
    const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));
    const data = await readFile(inputPath);
    args[0] = convertMsgData(data);

    func
      .apply(context, args)
  }
};

const convertTxt2JSON = async (inputFileData) => {
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);

  writeFile(outputPath, inputFileData);
};

module.exports = {
  convertTxt2JSON: getJSON(convertTxt2JSON),
  getRank: getJSON(getRank),
};
