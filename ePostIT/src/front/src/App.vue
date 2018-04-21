<template>
  <div id="app">
    <router-view/>
    <v-bottom-nav absolute :value="true" color="transparent">
      <v-btn flat color="teal" value="ADD" to="/map">
        <span>ADD</span>
        <v-icon>add_location</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="HOME" to="/second">
        <span>HOME</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="ACCOUNT" to="/first">
        <span>ACCOUNT</span>
        <v-icon>account_box</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods : {
    navigate(string) {
      console.log(string)
      this.$router.push(string);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
