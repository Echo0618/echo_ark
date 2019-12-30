import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menu from '@/project/Menu/Menu'
import weather from '@/project/views/Weather/weather.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
        path: '/',
        name: 'Menu',
        component: menu
    },{
        path:'/weather',
        name: 'Weather',
        component: weather
    }
  ]
})
