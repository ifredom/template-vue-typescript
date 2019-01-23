<template>
  <div class="home">
    <img src="../assets/logo.png">

    vue-enterprise-boilerplate-master  vue-ts-daily
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld
    }
  })
  export default class Home extends Vue {}
</script>