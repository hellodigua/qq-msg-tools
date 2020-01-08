#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");
const lib = require("../lib");

// 帮助信息
program
  .version(pkg.version)
  .name("qqmsg")
  .usage("[options] <command>");

program
  .command("convert")
  .option("-i, --input-path <pattern>", "输入文件相对路径")
  .action(({ inputPath }) => {
    lib.convertToJSON(inputPath);
  });

// 解析参数
program.parse(process.argv);

// 无参数传递时输出帮助信息
// if (!program.args.length) {
//   program.help();
// }
