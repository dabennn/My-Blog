import Vue from 'vue';
import App from './App';
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import Vuex from 'vuex';
import 'common/stylus/index.styl';
import home from 'components/home/home.vue';
import notes from 'components/notes/notes.vue';
import about from 'components/about/about.vue';
import category from 'components/category/category.vue';
import article from 'components/article/article.vue';

Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headerShow: true
  },
  mutations: {
    hiddenHeader(state, path){
      if (path.match(/\/article\//g) || path.match(/\/note\//g)) {
        state.headerShow = false;
      }
    },
    showHeader(state){
      state.headerShow = true;
    }
  }
});

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/notes',
    component: notes
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/article/:index',
    component: article,
    alias: '/note/:index'
  }
];
const router = new vueRouter({
  routes,
  linkActiveClass: 'active'
});

new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
}).$mount('#app');

router.push('/home');
