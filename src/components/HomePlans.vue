<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap>
            <template v-for="(item, index) in items">
                <v-flex xs12 sm12 md4 :key="index">
                    <v-card>
                        <v-responsive>
                            <v-img v-bind:src="item.imgSrc" height="500px">
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex xs12 align-end flexbox>
                                            <span class="headline white--text" style="text-transform: uppercase;">{{item.planName}}</span>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>
                        </v-responsive>
                        
                        <v-card-text>
                            <div>
                                <h3 class="headline mb-0">{{item.planName}}</h3>
                                <div>{{item.description}}</div>
                            </div>
                        </v-card-text>

                        <v-card-actions v-if="['menu'].includes($route.name)">
                            <v-btn outline block color="green" @click="showRecipes(item.planName)">Select This Plan</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
export default{
    name: 'HomePlans',
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




<!-- // save for later
var pres = document.getElementsByTagName('pre')
for(var i = 0; i < pres.length; i++){
pres[i].style.width = "1200px"
} -->