<template>
    <v-footer dark height="auto" class="transparent" :style="footerStyles">
        <v-card class="flex" flat tile>
            <v-card-title class="transparent">
               
            </v-card-title>
            <v-card-actions class="justify-center transparent">
                <span>&copy;{{getYear}} —&nbsp;<strong> Lane Wheeler</strong></span>
                <v-spacer></v-spacer>
                <v-btn v-for="(social, idx) in social" :key="idx" class="mx-3" dark icon>
                    <a :href="social.url" target="_blank" id="icons"><v-icon size="24px">{{ social.icon }}</v-icon></a>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            social: [
                { icon: 'fab fa-facebook-square', url: 'https://www.facebook.com/lanecwheeler'},
                { icon: 'fab fa-instagram', url: 'https://www.instagram.com/lanecwheeler/'},
                { icon: 'fab fa-twitter', url: 'https://twitter.com/lanecwheeler/'},
                { icon: 'fab fa-github', url: 'https://github.com/lanecwheeler/'},
            ]
        }
    },
    computed: {
        isAuthenticated(){
            return this.$store.getters.isAuthenticated
        },
        getYear(){
            let d = new Date();
            return d.getFullYear();
        },
        footerStyles(){
            if(this.$route.name == 'home')
                return {
                    opacity: 0,
                    pointerEvents: 'none',
                    position: 'absolute'
                }
            else return { opacity : 1, pointerEvents: 'inherit'}
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut')
        },
        onResize () {
            if(window.innerWidth > 960){
                this.drawer = false;
            } 
        }        
    }
}
</script>

<style scoped>
    .theme--dark.v-sheet{
        background-color: transparent;
    }
    #icons{
        color: #fff;
        text-decoration: none;
    }
</style>