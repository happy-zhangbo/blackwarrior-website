<template>
  <br />
  <div class="container">
<!--    <form>-->
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="d-grid gap-2">
        <button class="btn btn-primary" @click="login">Submit</button>
      </div>
<!--    </form>-->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  created() {

  },
  methods: {
    login(){
      this.$router.push("/index");
    }
  }
}
</script>

<style scoped>

</style>
