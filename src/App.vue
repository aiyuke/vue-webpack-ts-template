<template lang="pug">
  #app
    navbar
    .router
        router-view
</template>

<script lang="ts">

    import Component from 'vue-class-component'
    import Vue from 'vue'
    import Navbar from './components/navbar.vue'

    @Component({
        components: {
            navbar: Navbar
        }
    })
    export default class App extends Vue{
        name: 'app'
    }
</script>

<style>
.router {
    margin-left: 180px;
    margin-top: 52px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
