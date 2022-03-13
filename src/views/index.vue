<template>
  <div>
    <button type="button" class="btn btn-primary" @click="h">Primary</button>
    <button type="button" class="btn btn-primary" @click="ha">Primary</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  data() {
    return {

    }
  },
  methods: {
    ha(){
      this.$common.demo();
    },
    h(){
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  },
}
</script>

<style>

</style>
