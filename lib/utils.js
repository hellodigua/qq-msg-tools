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
    obj[next[key]] ? ' ' : (obj[next[key]] = true && item.push(next));
    return item;
  }, []);

  return result;
};

/**
 * 写入文本内容到文件
 * @param {String} filePath 文件路径
 * @param {String} data 文本内容
 */
const writeFile = (filePath, data) => {
  return fs.outputFile(filePath, JSON.stringify(data));
};

/**
 * 获取文件的文本内容
 * @param {String} filePath 文件路径
 */
const readFile = (filePath) => {
  return fs.readFile(filePath, 'utf8');
};

/**
 * 对象数组排序
 * @param {*} arr
 */
const sort = (arr, key) => {
  function sortId(a, b) {
    return b[key] - a[key];
  }

  return arr.sort(sortId);
};

/**
 * 计算唯一键在对象数组中出现的次数（在原对象中插入count）
 * @param {*} arr 原数组
 * @param {*} key 唯一键值
 */
const groupBy = (arr, key) => {
  const temp = {};
  const output = [];

  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; ++i) {
      const id = arr[i][key];

      if (id in temp) {
        temp[id].count += 1;
      } else {
        temp[id] = arr[i];
        temp[id].count = 1;
      }
    }
  }

  Object.keys(temp).map((key) => {
    output.push(temp[key]);
  });

  return output;
};

module.exports = {
  unique,
  groupBy,
  sort,
  writeFile,
  readFile,
};
