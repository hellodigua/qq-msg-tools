const fs = require("fs");
const path = require("path");

function getFileName(content) {
  const [, groupName = ''] = content.match(/消息对象:([^\n]+)/) || [];
  const date = new Date();

  return `${groupName}-${date.getTime()}`;
}

/**
 * 数组对象去重
 * @param {*} arr 原数组
 * @param {*} key 对象唯一键值
 */
function unique(arr, key) {
  let obj = {};
  let result = [];

  result = arr.reduce((item, next) => {
    obj[next[key]] ? ' ' : obj[next[key]] = true && item.push(next)
    return item
  }, [])

  return result;
}


const convertToJSON = (inputFile) => {
  const inputPath = path.join(path.resolve(__dirname, `../${inputFile}`));
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);

  fs.readFile(inputPath, (err, data) => {
    if (err) {
      return console.error(err);
    }

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

    fs.writeFile(
      outputPath,
      JSON.stringify({
        contactData,
        arrData
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
