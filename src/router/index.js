import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import music163 from '@/components/music163'

Vue.use(Router)
Vue.component("test",test)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'music163',
      component: music163,
    }
  ]
})
