<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/test">About</router-link> |
    <router-link to="/upload-task">Upload task</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  //padding: 20px;
  margin-top: 20px;
  margin-bottom: 40px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
