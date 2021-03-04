<template>
    <div id="app" >
        {{ message }}
        <br/>
        <button v-on:click="decrease" >-</button>
        <button v-on:click="increase" >+</button>
        {{ counter }}
        <br/><br/>
        <div>
            <div>
                <label for="first_name">Nom : </label>
                <input type="text" name="first_name" v-model="first_name">
                <label for="last_name">Prénom : </label>
                <input type="text" name="last_name" v-model="last_name">
                </div>
                <div>
                    <button v-on:click="display_name">Go</button>
                    Bonjour {{ nameToDisplay }}
                </div>
                </div>
                </div>

</template>

<script>

export default {
name : 'App',
data() {
    return {
        message: 'Hello Vue!!',
        counter: 0,
        first_name: '',
        last_name: '',
        display: ''
        }
        },
        methods: {
            decrease(){
                this.counter = this.counter - 1
                },
                increase(){
                    this.counter = this.counter + 1
                    },
                    display_name(){this.display = "Bonjour " + this.first_name + " " + this.last_name
                    }
                    },
                    computed: {
                        nameToDisplay(){
                            let result = this.first_name.toUpperCase() + " " + 
                            this.last_name.charAt(0).toUpperCase() + this.last_name.slice(1)
                            return( result)
                         }
                }
        }

</script>
<style>

</style>
