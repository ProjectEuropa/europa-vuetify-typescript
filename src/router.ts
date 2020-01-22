import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/pages/Top.vue'
import SimpleUpload from './components/pages/SimpleUpload.vue'
import SearchTeam from './components/pages/SearchTeam.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/simpleupload',
      name: 'SimpleUpload',
      component: SimpleUpload,
    },
    {
      path: '/search/team',
      name: 'SearchTeam',
      component: SearchTeam,
    },
  ]
});

export default router
