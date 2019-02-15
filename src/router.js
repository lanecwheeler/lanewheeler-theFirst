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
            component: Home,
            meta: {
                guest: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import('./views/Profile.vue'),
            meta: {
                guest: false
            }
        }, 
        {
            path: '/aboutme',
            name: 'aboutme',
            component: () =>
                import('./views/AboutMe.vue'),
            meta: {
                guest: true
            }
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () =>
                import('./views/Signin.vue'),
            meta: {
                guest: true
            }
        }, 
        {
            path: '/join',
            name: 'join',
            component: () =>
                import('./views/Join.vue'),
            meta: {
                guest: true
            }
        }
    ]
});
