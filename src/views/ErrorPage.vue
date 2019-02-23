<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-black white--text text-xs-center">
                404: Not Found
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center">
                How did you even get here?
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ErrorPage'
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
