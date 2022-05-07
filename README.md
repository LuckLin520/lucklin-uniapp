# uniapp+vuex3+vue2+uview2生产模板

## 一、请求封装
使用uview API $u.http封装全局请求拦截，并实现upload兼容多端的多文件上传demo

## 二、toast封装
封装<u-toast/>，具体使用见home页多文件上传demo

## 三、滑动分页封装
具体使用见user页分页demo

## 四、代码校验
- [参考官方帖子](https://ask.dcloud.net.cn/article/37070),HbuilderX的eslint-plugin-vue；
- 升级eslint-plugin-vue到1.1.4+，将ecmaVersion字段设置为latest；
- .eslintrc.js增加rules配置：
```
"max-len": ["error", { "code": 140 }], //单行最大长度
"no-multi-spaces": "error", // 禁止表达式多个空格 
"semi": ["error", "never"], // 禁止分号
"quotes": ["error", "single"], // 使用单引号
"comma-dangle": ["error", "never"], //禁止尾逗号
"arrow-parens": ["error", "as-needed"], //箭头函数省略括号
"no-trailing-spaces": ["error", { "skipBlankLines": true }], //禁止末尾多余空格
"key-spacing": ["error", { "afterColon": true }], //字面量对象冒号后空格
"object-curly-spacing": ["error", "always"], //字面量对象格式化一致的空格
"comma-spacing": ["error", {"before": false, "after": true}], //禁止在逗号前使用空格，要求在逗号后使用空格
// ...
```