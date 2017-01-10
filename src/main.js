import Vue from 'vue';
import App from './App';
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import 'common/stylus/index.styl';
import home from 'components/home/home.vue';
import notes from 'components/notes/notes.vue';
import about from 'components/about/about.vue';

Vue.use(vueRouter);
Vue.use(vueResource);


const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/notes',
    component: notes
  },
  {
    path: '/about',
    component: about
  }
];
const router = new vueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app');

router.push('/home');
