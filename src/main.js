// 1. 导入vue的包
import Vue from 'vue'
// 3. 按需导入mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// 2. 引入App.vue文件
import app from './App.vue'
var vm = new Vue({
  el:"#app",
  render:c => c(app),
 
})


// 4. 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 4. 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
//测试