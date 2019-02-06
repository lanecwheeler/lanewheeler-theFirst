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
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn class="hidden-sm-and-down" flat>Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn class="hidden-sm-and-down" flat>SIGN IN</v-btn>
            <v-btn class="hidden-sm-and-down" color="blue-grey lighten-1">JOIN</v-btn>
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
                { title: 'Sign In'},
                { title: 'Join'}
            ]
        }
    }
}
</script>

<style scoped>
</style>