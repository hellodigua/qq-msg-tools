# qq-msg-tools

> QQ聊天记录处理工具

- [x] 将导出的QQ聊天记录转换为JSON格式
- [x] 获取所有联系人
- [ ] 获取聊天排行数据

## Usage

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
