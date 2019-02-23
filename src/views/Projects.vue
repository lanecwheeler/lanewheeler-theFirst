<template>
    <v-container grid-list-lg fluid fill-height>
        <v-layout class="card_wrapper" row wrap justify-center align-center>
            <v-flex xs12 sm6 md6 lg4 v-for="(item, idx) in items" :key="idx">
                <v-card>
                    <v-responsive>
                        <v-img :src="item.imgSrc" height="350px"></v-img>
                    </v-responsive>
                    <v-card-text style="height: 150px;">
                        <div class="title">{{ item.projName }}</div>
                        <p class="mt-2 subheading">{{ item.description }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="blue-grey darken-4"
                            dark
                            :href="item.url"
                            target="_blank"
                            >Check it out</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            items: [
                {
                    projName: 'Joey Pepperoni',
                    imgSrc: require('../assets/joey_pepperoni.jpg'),
                    description:
                        'A twitter user bot built on NodeJS using the Twit API to generate Italian(ish) names and tweet them at people.',
                    url: 'https://www.twitter.com/AyJoeyPepperoni'
                },
                {
                    projName: '(COMING SOON!) the Official Website of the State of Oklahoma',
                    imgSrc: require('../assets/ok_gov.jpg'),
                    description:
                        "I was the sole developer in charge of redesigning and developing the (upcoming) Ok.gov.",
                    url: 'http://www.ok.gov'
                },
                {
                    projName: 'Personal Site',
                    imgSrc: require('../assets/lanewheeler_com.jpg'),
                    description:
                        "This is the site you're on. Woah, recursion maaaaan... (P.S. This site was made with VueJS and love)",
                    url: '/'
                }
            ]
        };
    },
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    }
};
</script>

<style scoped>
.card_wrapper {
    padding: 60px 0;
}
</style>
