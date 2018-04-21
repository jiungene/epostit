import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import map from '@/components/GoogleMap'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/second',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/first',
        name: 'first',
        component: first
    }, {
        path: '/map',
        name: 'map',
        component: map
    }]
})