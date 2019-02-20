import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: (Home),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () =>
                import('./views/Projects'),
        }, 
        {
            path: '/aboutme',
            name: 'aboutme',
            component: () =>
                import('./views/AboutMe'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import('./views/Contact')
        },
        { 
            path: "*", 
            name: 'error_404',
            component: () =>
                import('./views/ErrorPage') 
        }
    ]
});
