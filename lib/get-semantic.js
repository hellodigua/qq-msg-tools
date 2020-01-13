const path = require("path");
const { writeFile } = require('./utils');
const nodejieba = require('nodejieba');


/**
 * 群关键词分析
 * @param {*} msgData
 */
const getGroupKeyword = (msgData) => {
  let content = '';

  content = msgData.reduce((prev, next) => {
    return prev + next.content;
  }, '');

  content = nodejieba.extract(content, 100);

  return content;
}

/**
 * 获取群发言前10的人的关键词
 * @param {*} msgData
 */
const getPersonalKeyword = (msgData) => {

};


/**
 * 语义分析
 * @param {*} data 读入的消息数据
 * @param {*} typeParams 转换类型
 */
const getSemantic = ({ contactData, msgData }, typeParams = '') => {
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);

  let result = {};
  switch (typeParams) {
    case 'keyword':
      result = getKeyword(msgData);
      break;
    case 'keyword':
      result = getPersonalKeyword(msgData, contactData);
      break;
    case 'picture':
    default:
      break;
  }

  writeFile(outputPath, {
    typeParams,
    result
  });
};

module.exports = getSemantic;
