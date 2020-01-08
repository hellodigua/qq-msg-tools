const fs = require('fs-extra');

/**
 * 数组对象去重
 * @param {Array} arr 原数组
 * @param {String} key 对象唯一键值
 */
const unique = (arr, key) => {
  let obj = {};
  let result = [];

  result = arr.reduce((item, next) => {
    obj[next[key]] ? ' ' : obj[next[key]] = true && item.push(next)
    return item
  }, [])

  return result;
}

/**
 * 写入文本内容到文件
 * @param {String} filePath 文件路径
 * @param {String} data 文本内容
 */
const writeFile = (filePath, data) => {
  return fs.outputFile(filePath, data);
};

/**
 * 获取文件的文本内容
 * @param {String} filePath 文件路径
 */
const readFile = (filePath) => {
  return fs.readFile(filePath, 'utf8');
};


module.exports = {
  unique,
  writeFile,
  readFile,
};
