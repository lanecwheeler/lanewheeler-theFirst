<template>
    <v-app class="theme--dark darken-base">
        <app-navigation></app-navigation>
        <v-content class='pa-0'>
            <transition name="fade" mode="out-in" appear>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <transition name="fade" mode="out-in" appear>
                <app-footer v-if="!isHome"></app-footer>
            </transition>
        </v-content>
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
    },
    computed: {
        isHome(){
            if(this.$route.name == 'home') return true
            else return false
        }
    }
};

// KONAMI CODE SECRET :3
const kode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const length = kode.length
var pos = 0
document.addEventListener('keydown', function (event) {
    if (event.keyCode === kode[pos++]) {
        if (length === pos) {
            alert("TEST")
            pos = 0 
            return false
        }
    } else { pos = 0 }   
}, false)
</script>

<style>
    .darken-base.application{
        background-color: #1c313a;
        background-image: linear-gradient(to top right, #0c1418, #1c313a);
        color: #fff;
    }
    .red-text{
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
    @media (max-width: 600px){
        .v-toolbar__title{
            font-size: 16px;
        }
    }
    
</style>
