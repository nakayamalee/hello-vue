/* eslint-env node */
module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 0, // 關閉檔名必須要用駝峰命名
    'vue/no-reserved-component-names': 0, // 關閉組件保留名稱限制
    'vue/no-multiple-template-root': 0, // 關閉template只能單一節點限制
    'vue/no-v-model-argument': 0, // 關閉v-model後綴語法限制
    'no-undef': 0, // 允許變數值為undefined
    'no-console': 1, // 提醒仍有console.log未移除
    'eqeqeq': 2, // 強制使用 === 取代 ==
    'no-var': 2, // 禁止使用var變數
    'no-multiple-empty-lines': [2, { max: 1 }], // 空行最多不能超過1行
    'no-multi-spaces': 2, // 禁止多餘的空格
    'no-else-return': 2, // 禁止if判斷式return之後有else
    'quotes': [2, 'single'], // 強制使用單引號
    'semi': 2, // 強制加句尾分號
  },
};
