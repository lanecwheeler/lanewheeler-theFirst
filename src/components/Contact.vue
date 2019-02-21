<template>
    <v-container grid-list-lg fluid fill-height>
        <v-layout class="card_wrapper" row wrap justify-center align-center>
            <v-flex xs12 sm8 my-5>
                <v-card flat>
                    <v-snackbar v-model="snackbar" absolute top right color="primary">
                        <span>Message Sent!</span>
                        <v-icon dark>fas fa-check-square</v-icon>
                    </v-snackbar>
                    <v-form ref="form" @submit.prevent="submit">
                        <v-container grid-list-xl fluid>
                            <v-layout wrap>
                                <v-flex xs12>
                                    <div class="display-1" id="dropALine">Drop Me A Line!</div>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field v-model="form.name" :rules="rules.name" label="Name" required></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field v-model="form.email" :rules="rules.email" label="Email" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea v-model="form.message">
                                        <div slot="label">
                                            Message <small>(optional)</small>
                                        </div>
                                    </v-textarea>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-select v-model="form.favoriteAnimal" :items="animals" :rules="rules.animal" clabel="Favorite animal">
                                        <div slot="label">
                                            Favorite Animal <small>(optional)</small>
                                        </div>
                                    </v-select>
                                </v-flex>
                                <!-- I like this though, might add something back in later -->
                                <!-- <v-flex xs12>
                                    <v-checkbox v-model="form.terms" color="green">
                                    <div slot="label" @click.stop="">
                                        Do you accept the
                                        <a href="javascript:;" @click.stop="terms = true">terms</a>
                                        and
                                        <a href="javascript:;" @click.stop="conditions = true">conditions?</a>
                                    </div>
                                    </v-checkbox>
                                </v-flex> -->
                            </v-layout>
                        </v-container>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn :disabled="!formIsValid" @click="sendMail" flat color="primary" type="submit">Send it!</v-btn>
                        </v-card-actions>
                    </v-form>
                    <v-dialog v-model="terms" width="70%">
                        <v-card>
                            <v-card-title class="title">Terms</v-card-title>
                            <v-card-text v-for="n in 5" :key="n">
                                {{ content }}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="purple" @click="terms = false">Ok</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="conditions" width="70%">
                        <v-card>
                            <v-card-title class="title">Conditions</v-card-title>
                            <v-card-text v-for="n in 5" :key="n">
                                {{ content }}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn flat color="purple" @click="conditions = false">Ok</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import config from '../../config.js'

export default {
    name: 'Contact',
    data () {
        const defaultForm = Object.freeze({
            name: '',
            email: '',
            message: '',
            favoriteAnimal: ''
        })

        return {
            form: Object.assign({}, defaultForm),
            rules: {
                name: [val => (val || '').length > 0 || 'This field is required'],  
                email: [
                    (val) => !!val || 'E-mail is required',
                    (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'E-mail must be valid'
                ]
            },
            animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake', 'Other'],
            conditions: false,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
            snackbar: false,
            terms: false,
            defaultForm
        }
    },
    computed: {
      formIsValid () {
        return (
          this.form.name &&
          this.form.email &&
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)
        )
      }
    },
    methods: {
        submit () {
            this.snackbar = true
            // MAKE THIS SUBMIT TO SOME KIND OF SERVICE
            this.resetForm()
        },
        sendMail () {
            console.log('CONFIG')
            console.log(config)
            console.log('FORM')
            console.log(this.form)
            var API_KEY = config.mailgunKeys.API_KEY;
            var DOMAIN = config.mailgunKeys.DOMAIN;
            var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

            console.log(API_KEY)

            const data = {
                from: this.form.name + '<' + this.form.email + '>',
                to: 'contact@lanewheeler.com, lanecwheeler@gmail.com',
                subject: 'New Contact Form!',
                text: 'Message: ' + this.form.message + '\nFavorite Animal' + this.form.favoriteAnimal
            };
            
            console.log(data)

            mailgun.messages().send(data, (error, body) => {
                console.log(body);
                console.log(error)
            });
        },
        resetForm () {
            this.$refs.form.reset()
        },
        
    }
  
  
}
</script>

<style scoped>
    #dropALine{
        font-family: Roboto Mono !important;
    }
</style>
