/**
 * 获取群名称
 */
const getFileName = (content) => {
  const [, groupName = ''] = content.match(/消息对象:([^\n]+)/) || [];

  return groupName;
}

/**
 * 计算成员的发言，返回总发言的合集
 * @param {*} arr 原数组
 * @param {*} key 唯一键值
 */
const groupByContent = (arr, key) => {
  const temp = {};
  const output = [];

  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; ++i) {
      const id = arr[i][key];

      if (id in temp) {
        temp[id].count += 1;
        temp[id].totalContent = temp[id].totalContent + arr[i].content;
      } else {
        temp[id] = arr[i];
        temp[id].count = 1;
        temp[id].totalContent = temp[id].content;
      }
    }
  }

  Object.keys(temp).map((key) => {
    output.push(temp[key]);
  })

  return output;
};

module.exports = {
  groupByContent
};
