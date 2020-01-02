#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

// 帮助信息
program
  .version(pkg.version)
  .name('qqmsg')
  .usage('[options] <command>');

// 执行脚本
program
  .command('convert <type>')
  .option('-i, --input-path <pattern>', '输入文件相对路径')
  .option('-o, --output-path <path>', '输出文件相对路径，若不指定则直接输出文本')
  .action((type, { inputPath, outputPath }) => {
    console.log('type is', type);
    console.log('inputPath is', inputPath);
    console.log('outputPath is', outputPath);
  });

// 解析参数
program.parse(process.argv);

// 无参数传递时输出帮助信息
if (!program.args.length) {
  program.help();
}
