<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <router-link to="/login">login</router-link>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
