<template>
  <main id="app">
    <div v-if="$route.meta.requireAuth">
      <router-view />
    </div>
    <div v-else>
      <router-view />
    </div>
  </main>
</template>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>