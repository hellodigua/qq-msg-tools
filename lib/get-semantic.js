const path = require('path');
const { writeFile, sort } = require('./utils');
const { groupByContent } = require('./helper');
const nodejieba = require('nodejieba');

/**
 * 群关键词分析
 * @param {*} msgData
 */
const getGroupKeyword = (msgData) => {
  let keywords = '';

  keywords = msgData.reduce((prev, next) => {
    return prev + next.content;
  }, '');

  keywords = nodejieba.extract(keywords, 100);

  const keywords_str = keywords.reduce((prev, next) => {
    return prev + next.word + ',';
  }, '');

  return {
    keywords,
    keywords_str,
  };
};

/**
 * 获取群发言前10的人的关键词
 * @param {*} msgData
 */
const getMembersKeyword = (msgData) => {
  // 计算成员的发言
  let contactMsgData = groupByContent(msgData, 'id');

  // 按发言数排序
  contactMsgData = sort(contactMsgData, 'count');

  contactMsgData = contactMsgData.slice(0, 10);

  contactMsgData = contactMsgData.map(({ id, name, totalContent }) => {
    const keywords = nodejieba.extract(totalContent, 25);

    const keywords_str = keywords.reduce((prev, next) => {
      return prev + next.word + ',';
    }, '');

    return { id, name, keywords, keywords_str };
  });

  return contactMsgData;
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
      result = getGroupKeyword(msgData);
      break;
    case 'membersKeyword':
      result = getMembersKeyword(msgData);
      break;
    default:
      break;
  }

  writeFile(outputPath, {
    typeParams,
    result,
  });
};

module.exports = getSemantic;
