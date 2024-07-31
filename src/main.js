import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Coffee from './views/Coffee.vue'
import Tea from './views/Tea.vue'
import CocoaMilk from './views/CocoaMilk.vue'
import Bakery from './views/Bakery.vue'
import store from './store'
import './style.css'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'Home', component: Home},
        {path:'/coffee', name:'Coffee', component: Coffee},
        {path:'/tea', name:'Tea', component: Tea},
        {path:'/cocoa&milk', name:'Cocoa&Milk', component: CocoaMilk},
        {path:'/bakery', name:'Bakery', component: Bakery},
    ]
})

createApp(App).use(store)
.use(router)
.mount('#app')
