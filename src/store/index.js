import Vue from 'vue'
import Vuex from 'vuex'

import app from '@/views/main/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//数据
		
	},
	mutations: { //事件集,mutation是同步的

	},
	getters:{//计算属性
		
	},
	actions:{//专门放置异步交互代码,Action 是异步的
		
	},
	modules:{//模板
		app,
	}
})
