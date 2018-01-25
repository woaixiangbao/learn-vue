// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    //ES6的箭头函数的参数用小括号括起来
    'arrow-parens': "error",
    //强制ES6中的Generators函数中的星号周围有空格
    'generator-star-spacing': "error",
    // 禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //必须使用分号结尾
    'semi': ['error', 'always'],

    'no-tabs': "off",
    "indent": ["off", 4], // 4个空格缩进
    //要求或禁止函数圆括号之前有一个空格,always是需要空格，never是不需要空格
    'space-before-function-paren': ["error", "never"],
    // 要求或禁止块内填充，就是代码块的首尾都用空行填充
    'padded-blocks': ["error", "never"],
    // 禁用行尾空白,skipBlankLines: true 允许使用空格
    'no-trailing-spaces': ["error",{"skipBlankLines": true}],
    // 禁用未声明的变量
    'no-undef': "error",
    // 使用 === 替代 == allow-null允许null和undefined==
    "eqeqeq": ["error", "always"], 
    // 禁用不必要的转义字符
    "no-useless-escape": "error", 
    // 双峰驼命名格式,不检查属性名称
    "camelcase": ["error",{"properties":"never"}], 
    // 禁止出现未使用过的变量
    "no-unused-vars": "error", 
    // 要求promise reject方法转为为error
    "prefer-promise-reject-errors": [
        "error",
        {
            "allowEmptyReject": true
        }
    ],
    // 强制函数中的变量要么一起声明要么分开声明
    "one-var": ["error", {
        "initialized": "never"
    }],
    // return语句不应该包含赋值语句
    "no-return-assign": "error", 
    // 禁止使用 var 多次声明同一变量
    "no-redeclare": "error", 
    // 禁止在字符串和注释之外不规则的空白
    "no-irregular-whitespace": "error",
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": "error",
    // 禁止混合使用不同的操作符
    "no-mixed-operators": "error",
    // 禁止扩展原生类型
    "no-extend-native": "off",
    // if while function 后面的{必须与if在同一行，java风格。
    "brace-style": "error",
    // 禁止不必要的 .call() 和 .apply() 
    "no-useless-call": "off",
    // 要求回调函数中有容错处理
    "handle-callback-err": ["off", "^(err|error)$"],
    // 强制在关键字前后使用一致的空格 (前后腰需要) eg:if (condition) { ... }
    "keyword-spacing": "error",
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [0, "always"],
    "no-alert": 0,//禁止使用alert confirm prompt
    "no-const-assign": 0,//禁止修改const声明的变量
    "no-delete-var": 0,//不能对var声明的变量使用delete操作符
    "no-dupe-keys": 0,//在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 0,//函数参数不能重复
    "no-else-return": 0,//如果if语句里面有return,后面不能跟else语句
    "no-empty": 1,//块语句中的内容不能为空
    "no-empty-character-class": 0,//正则表达式中的[]内容不能为空
    "no-extra-semi": 0,//禁止多余的冒号
    "no-func-assign": 0,//禁止重复的函数声明
  }
}
