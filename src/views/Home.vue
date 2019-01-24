<template>
  <div class="home">
    <img src="../assets/logo.png">

    <div id="nav">
      <router-link to="/" tag="div">Home</router-link> |
      <router-link to="/login" tag="div">login</router-link> |
      <router-link to="/about" tag="div">about</router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  async send() {
    const createTime = new Date().valueOf();
  }
}
</script>
