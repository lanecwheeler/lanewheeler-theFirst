<template>
    <span>
        <v-container fluid fill-height class="about-hero hidden-sm-and-down" style="min-height: 50vh;" :style="{ background: 'url(' + require('../assets/fam_photo.jpg') + ')' }"></v-container>
        <v-container fluid fill-height class="about-hero hidden-md-and-up" style="min-height: 50vh;" :style="{ background: 'url(' + require('../assets/just_me.jpg') + ')' }"></v-container>

        <v-container grid-list-lg>
            <v-layout column>
                <v-layout row class="mt-2">
                    <v-flex xs12 class="text-xs-left display-1 font-weight-black">Hi, I'm Lane. Let's keep it short.</v-flex>
                </v-layout>
                <v-flex>
                    <p class="subheading mt-2">
                        <span class="headline red-text">First, I am follower of Jesus. </span>
                        I believe that Jesus loves us all and can't wait to have a relationship with us. 
                        It is my goal to show as many people that relationship as I can through my daily interactions and work ethic. 
                        I've got three of the best siblings and two of the best parents a guy could ask for.
                        <span class="headline mt-3 red-text">Second, I am a developer.</span>
                        I specialize in UI/UX development, but that certainly does not mean my 'stack' is limited to only that.
                        I am proficient with HTML, CSS, and Javascript and I make use of many tools designed to help with that work.
                        I'm a lover of Bootstrap, an evangalist of accessibility, and am practically head over heels for good user-centric design.
                        But I'm not just a front-end art monkey, I am also familiar with PHP, Java, C#, and can write a mean SQL statement.
                        Recently, I've also been experimenting with NodeJs (hence, this site). 
                        In short, I'm pretty dangerous with an IDE.
                        <span class="headline mt-3 red-text">Finally, I am a designer.</span>
                        Along with the coding, I enjoy creating websites that feel good and look good. I am also well versed in Photoshop and Illustrator
                        (what can I say, Adobe makes a good product) and do a monicum of (average) art with them in my free time. 
                    </p>
                    <p class="headline mt-3 text-xs-center font-weight-black">
                        <span class="headline red-text font-weight-black">TLDR;</span> My Name is Lane, and I love this job.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-spacer class="my-5 hidden-lg-and-up"></v-spacer>
    </span>
</template>

<script>
export default{
    name: 'AboutMe',
    data() {
        return {
            items: [
                {planName : "Keto", imgSrc : "http://source.unsplash.com/hjCA3ecCXAQ", description : "The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis."},
                {planName : "Paleo", imgSrc : "http://source.unsplash.com/6S27S6pZ6o0", description : "The Paleo diet requires the sole or predominant consumption of foods presumed to have been the only foods available to or consumed by humans during the Paleolithic era."},
                {planName : "Vegan", imgSrc : "http://source.unsplash.com/1SPu0KT-Ejg", description : "The vegan diet abstains from the use of animal products. The vegan diet does not consume meat, diary products, eggs or any all other animal-derived ingredients."}
            ]
        }
    }, 
    methods: {
        showRecipes(plan) {
            console.log(plan + ' clicked')
            this.$store.dispatch('getRecipes', plan)
        }
    }
}
</script>

<style scoped>
    .about-hero {
        background-size: cover !important;
        background-repeat: no-repeat;
        background-position: 50% 30% !important;
        width: 100%;
        height: 100%;
        position: relative;
    }
    .dark--text{
        color: #445963;
    }
    p{
        line-height: 32px;
    }
</style>
