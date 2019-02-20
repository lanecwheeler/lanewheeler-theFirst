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
        <div class="konami">
            <v-icon>fas fa-arrow-alt-circle-up</v-icon>
            <v-icon>fas fa-arrow-alt-circle-up</v-icon>
            <v-icon>fas fa-arrow-alt-circle-down</v-icon>
            <v-icon>fas fa-arrow-alt-circle-down</v-icon>
            <v-icon>fas fa-arrow-alt-circle-left</v-icon>
            <v-icon>fas fa-arrow-alt-circle-right</v-icon>
            <v-icon>fas fa-arrow-alt-circle-left</v-icon>
            <v-icon>fas fa-arrow-alt-circle-right</v-icon>
            <span class='secret_ba'>B</span>
            <span class='secret_ba'>A</span>
        </div>
        <div class="ryu">
            <v-img :src="require('./assets/ryu.png')" contain height="100"></v-img>
        </div>
        <div class="hadouken">
            <v-img :src="require('./assets/hadouken.png')" contain height="50"></v-img>
        </div>
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
    // It ain't pretty, but it works. 
    if (event.keyCode === kode[pos++]) {
        if (length === pos) {
            document.getElementsByClassName("ryu")[0].style.left = '0px'
            document.getElementsByClassName("hadouken")[0].style.left = '80px'
            var audio = new Audio(require('./assets/hadouken.mp3'))
            audio.play()
            setTimeout(function(){ document.getElementsByClassName("hadouken")[0].style.left = '110%'}, 350)
            setTimeout(function(){ 
                document.getElementsByClassName("ryu")[0].style.left = '0px'
                document.getElementsByClassName("hadouken")[0].style.opacity = "0"
                document.getElementsByClassName("hadouken")[0].style.left = '-50px'
                setTimeout(function(){ document.getElementsByClassName("hadouken")[0].style.opacity = '1' }, 500)
                document.getElementsByClassName("ryu")[0].style.left = '-100px'
            }, 1000)
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
    .konami{
        color: #ffffff20 !important;
        padding: 0 2px;
        position: fixed;
        bottom: -35px; 
        right: 5px;
    }
    .konami i{
        color: #ffffff20 !important;
        padding: 0 2px; 
    }
    .secret_ba{
        padding: 0 0 0 4px;
        font-size: 24px;
        font-family: Roboto Mono !important;
        font-weight: bold;
    }
    .ryu{
        position:fixed;
        top: calc(50% - 50px);
        bottom: 50%;
        left: -100px;
        transition: left .5s ;
        z-index: 1;
        height: 100px;
        width: 100px;
    }
    .hadouken{
        position:fixed;
        top: calc(50% - 50px);
        bottom: 50%;
        left: -50px;
        transition: left .5s ;
        z-index: 1;
        height: 50px;
        width: 50px;
    }
</style>
