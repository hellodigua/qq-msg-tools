# qq-msg-tools

> QQ 聊天记录处理工具

## TODO

- [x] 将导出的 QQ 聊天记录转换为 JSON 格式
- [x] 获取所有联系人
- [x] 获取聊天排行数据
- [ ] 分析 24 小时聊天频率
- [ ] 分析一周 7 天聊天频率
- [ ] 统计龙王获得数排行
- [ ] 复读分析

## Usage

聊天记录需要在 Windows 电脑上，通过 QQ 的导出工具进行导出，导出时选择导出为 txt 文件，然后进行分析。

```
npm i qq-msg-tools

qqmsg <options> <command>
```

## API

```bash
# 转换聊天数据为JSON
qqmsg convert -i ./public/demo.txt

# 获取排行数据
qqmsg get rank -i ./public/demo.txt

# 获取活跃度排行
qqmsg get rank -p activity -i ./public/demo.txt

# 获取表情包发言排行
qqmsg get rank -p picture -i ./public/demo.txt

# 获取群聊关键词
qqmsg get semantic -p keyword -i ./public/demo.txt

# 获取TOP10成员发言关键词
qqmsg get semantic -p membersKeyword -i ./public/demo.txt

```

## Dev

```bash
git clone https://github.com/hellodigua/qq-msg-tools.git

cd qq-msg-tools

npm install

npm link
```
