<template>
    <v-app class="theme--dark darken-base">
        <app-navigation></app-navigation>
        <v-content class='pa-0'>
            <transition name="fade" mode="out-in" appear>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </v-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import AppFooter from '@/components/AppFooter'

export default {
    name: 'App',
    components: {
        AppNavigation,
        AppFooter
    }
};
</script>

<style>
    .darken-base.application{
        background-color: #1c313a;
        background-image: linear-gradient(to top right, #0c1418, #1c313a);
        color: #fff;
    }
    .light-blue-text{
        color: #B81724;
        font-weight: bold;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
    .fade-enter, .fade-leave-to {
        opacity: 0 !important;
    }
    .slide-enter-active, .slide-leave-active {
        transition: max-width .5s cubic-bezier(0.65, 0.05, 0.36, 1);
    }
    .slide-enter, .slide-leave-to {
        max-width: 0 !important;
    }
</style>
