<template>
    <v-footer dark height="auto" class="transparent justify-center">
        <v-card class="flex" flat tile>
            <v-card-title class="transparent" style="width: 100vw;">
                <span id="copywrite" class="hidden-xs-only"
                    >&copy;{{ getYear }} —&nbsp;<strong>
                        Lane Wheeler</strong
                    ></span
                >
                <v-spacer class="hidden-xs-only"></v-spacer>
                <span id="socialbar" class="text-xs-right text-md-center">
                    <v-btn
                        v-for="(social, idx) in social"
                        :key="idx"
                        class="mx-3"
                        dark
                        icon
                    >
                        <a :href="social.url" target="_blank" id="icons"
                            ><v-icon size="24px">{{ social.icon }}</v-icon></a
                        >
                    </v-btn>
                </span>
            </v-card-title>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            social: [
                {
                    icon: 'fab fa-facebook-square',
                    url: 'https://www.facebook.com/lanecwheeler'
                },
                {
                    icon: 'fab fa-instagram',
                    url: 'https://www.instagram.com/lanecwheeler/'
                },
                {
                    icon: 'fab fa-twitter',
                    url: 'https://twitter.com/lanecwheeler/'
                },
                {
                    icon: 'fab fa-github',
                    url: 'https://github.com/lanecwheeler/'
                },
                {
                    icon: 'fab fa-linkedin',
                    url: 'https://www.linkedin.com/in/lanecwheeler'
                }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        getYear() {
            let d = new Date();
            return d.getFullYear();
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
.theme--dark.v-sheet {
    background-color: transparent;
}
#icons {
    color: #fff;
    text-decoration: none;
}
footer {
    position: absolute;
    bottom: 0;
    right: 0;
    transition: opacity 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
}
#socialbar {
    margin: 0 auto;
}
</style>
