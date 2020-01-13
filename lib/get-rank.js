const path = require("path");
const { groupBy, sort, writeFile } = require('./utils');

/**
 * 获取活跃度排行
 * @param {*} msgData
 */
const getActivityRank = (msgData) => {
  msgData = groupBy(msgData, 'id')

  msgData = msgData.map(({ id, name, count }) => {
    return { id, name, count }
  });

  msgData = sort(msgData, 'count');

  return msgData;
};

/**
 * 获取表情包发送排行
 * @param {*} msgData
 */
const getPictureRank = (msgData) => {
  msgData = msgData.filter((item) => item.content === '[图片]');

  msgData = groupBy(msgData, 'id')

  msgData = msgData.map(({ id, name, count }) => {
    return { id, name, count }
  });

  msgData = sort(msgData, 'count');

  return msgData;
};

/**
 * 获取排行数据
 * @param {*} data 读入的消息数据
 * @param {*} typeParams 转换类型
 */
const getRank = ({ contactData, msgData }, typeParams = '') => {
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);

  let result = {};
  switch (typeParams) {
    case 'activity':
      result = getActivityRank(msgData);
      break;
    case 'picture':
      result = getPictureRank(msgData);
    default:
      break;
  }

  writeFile(outputPath, {
    typeParams,
    result
  });
};

module.exports = getRank;
module.exports = {
  getActivityRank
};
