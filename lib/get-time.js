const path = require("path");
const { groupBy, sort, writeFile } = require('./utils');


/**
 * 获取24小时群活跃度
 * @param {*} msgData
 */
const get24HoursActiveness = (msgData) => {

};

/**
 * 时间分析
 * @param {*} data 读入的消息数据
 * @param {*} typeParams 转换类型
 */
const getTime = ({ contactData, msgData }, typeParams = '') => {
  const outputPath = path.join(path.resolve(process.cwd()), `result.json`);

  let result = {};
  switch (typeParams) {
    case '24hourActive':
      result = get24HoursActiveness(msgData);
      break;
    default:
      break;
  }

  writeFile(outputPath, {
    typeParams,
    result
  });
};

module.exports = getTime;
