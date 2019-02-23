<template>
    <span>
        <v-navigation-drawer
            v-resize="onResize"
            app
            v-model="drawer"
            dark
            class="darken-base"
            disable-resize-watcher
        >
            <v-list v-for="(item, index) in items" :key="index">
                <v-list-tile :to="item.url">
                    <v-list-tile-content>
                        {{ item.title }}
                    </v-list-tile-content>
                </v-list-tile>
                <!-- <v-divider :key="`divider-${index}`"></v-divider> -->
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed flat dark class="transparent">
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link class="my-auto" to="/" style="position: relative">
                <v-toolbar-title id="site_title">
                    <span id="a">lane_wheeler(</span>
                    <transition name="slide" mode="out-in" appear>
                        <span
                            :key="$route.name"
                            class="red-text"
                            id="pageName"
                            >{{ $route.name }}</span
                        >
                    </transition>
                    <span id="b">);</span>
                </v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn class="hidden-sm-and-down" to="/aboutme" flat
                >About Me</v-btn
            >
            <v-btn class="hidden-sm-and-down" to="/projects" flat
                >Projects</v-btn
            >
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <!-- <v-btn flat to="/sign-in">SIGN IN</v-btn> -->
                <v-btn flat to="/contact">Let's Talk</v-btn>
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home', url: '/' },
                { title: 'About Me', url: '/aboutme' },
                { title: 'Projects', url: '/projects' },
                { title: "Let's Talk", url: '/contact' }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        },
        onResize() {
            if (window.innerWidth > 960) {
                this.drawer = false;
            }
        }
    }
};
</script>

<style scoped>
.v-toolbar__title {
    font-family: 'Roboto Mono';
}
a {
    color: #fff;
    text-decoration: none;
}
.v-btn .v-btn__content .v-icon {
    color: #b81724;
}
.darken-base {
    background-color: #1c313a;
    color: #fff;
}
#pageName,
#a,
#b {
    max-width: 100vw;
    display: inline-block;
    overflow: hidden;
    margin-top: 1px;
    z-index: 2;
}
#site_title::before {
    content: '';
    position: absolute;
    left: -5px;
    right: 0;
    z-index: -1;
    width: 420px; /* Blaze it */
    height: 36px;
    background-color: #ffffff50;
    border-radius: 2px;
    padding: 2px 5px;
}
@media (min-width: 960px) {
    #site_title::before {
        right: -5px;
        left: auto;
    }
}
@media (max-width: 600px) {
    .v-toolbar__title {
        font-size: 16px;
    }
    #site_title::before {
        height: 28px;
    }
}
</style>
