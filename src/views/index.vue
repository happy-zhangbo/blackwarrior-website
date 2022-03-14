<template>
  <div>
    <div class="p-5 bg-primary text-white text-center">
      <h1>Hello,Word</h1>
    </div>
    <div class="container-xxl mt-3">
      <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">My Bugs</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">My Things</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Exchange</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="row">
            <div class="col-md-4 mb-5" v-for="(item,index) in 24" :key="index">
              <div class="card">
                <img src="../assets/img/head_image.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="javascrip:;" @click="open" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <el-steps :active="active" finish-status="success">
            <el-step title="Choose your bug"></el-step>
            <el-step title="Use Potion"></el-step>
            <el-step title="Choose rebel bug"></el-step>
            <el-step title="Successfully"></el-step>
          </el-steps>
          <br /><br />
        </div>
      </div>

    </div>
    <br />
    <div class="p-4 bg-dark text-white text-center fixed-bottom">
      <p>Foot</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  data() {
    return {
      active: 1,
    }
  },
  methods: {
    ha(){
      this.$common.demo();
    },
    open(){
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
