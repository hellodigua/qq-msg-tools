const { unique } = require('./utils');

/**
 * 将聊天记录转成JSON
 * @param {*} data 读入的消息数据
 */
const convertMsgData = (data) => {
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

  return {
    contactData,
    arrData
  }
};

module.exports = {
  convertMsgData
};
