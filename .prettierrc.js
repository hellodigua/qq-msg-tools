// 参考 https://prettier.io/docs/en/options.html

module.exports = {
  // 行最大长度
  printWidth: 100,
  // 使用单引号 是
  singleQuote: true,
  // 多行数组是否需要尾部追加逗号 es5 语法需要
  trailingComma: 'es5',
  // 箭头函数方法是否需要括号 是
  arrowParens: 'always',
  // 定义换行符 lf linux-style
  endOfLine: 'lf',
  // 配置 wxss 文件使用 css 解析
  overrides: [
    {
      files: ['*.wxss'],
      options: { parser: 'css' },
    },
    {
      files: ['*.wxml'],
      options: { parser: 'html' },
    },
  ],
};
