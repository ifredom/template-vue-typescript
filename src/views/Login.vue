<template>
  <div class="login">
    <h1>This is an login page</h1>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'


  export default class Feedback extends Vue {
    async send() {
      const createTime = new Date().valueOf();
    }
  }
</script>