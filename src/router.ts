import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/pages/Top.vue'
import SimpleUpload from './components/pages/SimpleUpload.vue'
import SearchTeam from './components/pages/SearchTeam.vue'
import Login from './components/pages/Login.vue'
import Information from './components/pages/Information.vue'
import EventNotice from './components/pages/EventNotice.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
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
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
    },
    {
      path: '/eventnotice',
      name: 'EventNotice',
      component: EventNotice,
    },
  ]
});

export default router
