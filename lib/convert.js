const { unique } = require('./utils');

/**
 * 将聊天记录转成JSON
 * @param {*} data 读入的消息数据
 */
const convertMsgData = (data) => {
  let stringData = data.toString();
  let msgData = [];
  let contactData = [];

  stringData.replace(
    /(?<date>\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) (?<name>.+)(?<id>(\(\d{6,11}\)|<.+>))\r\n(?<content>.*)/g,
    (...args) => {
      args[8].id = args[8].id.match(/\d{5,10}|(?!<).+(?=>)/)[0];
      msgData.push(args[8]);
    }
  );

  contactData = msgData.map(({ name, id }) => {
    return { name, id };
  });

  contactData = unique(contactData, 'id');

  return {
    totalCount: msgData.length,
    contactData,
    msgData,
  };
};

module.exports = {
  convertMsgData,
};
