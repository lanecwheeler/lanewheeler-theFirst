<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="blue-grey" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-title :key="index">
                        <v-list-title-content>
                            {{item.title}}
                        </v-list-title-content>
                    </v-list-title>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app class="blue-gray">
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn class="hidden-sm-and-down" to="/Menu" flat>Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
                <v-btn color="blue-grey lighten-1" to="/join">JOIN</v-btn>
            </div>
            <v-btn v-else outline color="blue-grey" @click="logout">Logout</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'lane_wheeler( ){',
            drawer: false,
            items: [
                { title: 'Menu'},
                { title: 'Profile'},
                { title: 'Sign In'},
                { title: 'Join'}
            ]
        }
    },
    computed: {
        isAuthenticated(){
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut')
        }
    }
}
</script>

<style scoped>
    a {
        color: #404040;
        text-decoration: none;
    }
</style>