import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';

new Vue({
	vuetify,
	render(h) {
		return h(App);
	},
	router,
}).$mount('#app');
