import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test1 from '@/components/Test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'Hello', component: Hello
    },
    {
      path: '/hello', name: 'Hello', component: Hello
    },
    {
      path: '/1111', name: 'test1', component: Test1
    }
  ]
})
