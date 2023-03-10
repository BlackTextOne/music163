import Vue from "vue";
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/layout/home' },
    { path: '/layout', component: Layout, children: [
            { path: 'home', component: Home, meta:{title:'首页'} },
            { path: 'search', component: Search, meta:{title:'搜索'} },
        ] },
    { path: '/play', component: Play },
    { path: '*', component: NotFound },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router