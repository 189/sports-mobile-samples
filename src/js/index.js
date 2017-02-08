
// 业务内 alias 引入
import 'layout-css';
// 业务内 相对目录引入
import message from './message';
// 公共模块引入
import fastclick from 'libs/fastclick/fastclick';

import Vue from 'vue';

fastclick(document.body);

const app = new Vue({
	delimiters : ["{=", "=}"],
	components : {},
	data : {
		msg : message
	}
});

app.$mount('#box');








