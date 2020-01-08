/**
 * 获取群名称
 */
const getFileName = (content) => {
  const [, groupName = ''] = content.match(/消息对象:([^\n]+)/) || [];

  return groupName;
}
