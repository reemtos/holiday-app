import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Package from '../views/Package'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/package/:packageName',
      name: 'package',
      component: Package
    }
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
