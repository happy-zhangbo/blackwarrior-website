<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {

    }
  },
  computed:{
    isLoading: function () {
      return this.$store.state.isLoading
    }
  },
  methods: {

  }
}
</script>
<style>

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
