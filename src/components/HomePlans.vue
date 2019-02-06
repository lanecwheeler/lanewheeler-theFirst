<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap>
            <template v-for="(item, index) in items">
                <v-flex xs12 sm12 md4 :key="index">
                    <v-card>
                        <v-img v-bind:src="item.imgSrc" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text" style="text-transform: uppercase;">{{item.planName}}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{item.planName}}</h3>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
                                </div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </template>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        name: 'Plans',
        data() {
            return {
                items: [
                    {planName : "Keto", imgSrc : "http://source.unsplash.com/hjCA3ecCXAQ"},
                    {planName : "Paleo", imgSrc : "http://source.unsplash.com/6S27S6pZ6o0"},
                    {planName : "Vegan", imgSrc : "http://source.unsplash.com/1SPu0KT-Ejg"}
                ]
            }
        }
    }
</script>