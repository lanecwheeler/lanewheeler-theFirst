<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;" >
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">TALK NERDY TO ME</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Just a front-end dev waitin' on Skynet</div>
            <!-- <v-icon large color="white" class="mt-5 pt-5">fa fa-arrow-alt-circle-down</v-icon> -->
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'HomeHero'
    };
</script>

<style scoped>
    .home-hero {
        background-image: url('../assets/homepage_bg.jpg');
        background-size: cover !important;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: relative;
    }

</style>