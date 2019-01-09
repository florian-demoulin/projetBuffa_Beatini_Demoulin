import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Welcome from './components/Welcome.vue';
import RestauListe from './components/RestauListe.vue'

Vue.use(VueRouter);

const routes = [
	{path:'/RestauListe', component: RestauListe},
	{path:'/', component: Welcome}
]

const router = new VueRouter({
	routes: routes,
	mode:'history'
})

Vue.component("app-Welcome", Welcome);
console.log(Vue.created)

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
