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
            <div>
              {{ account }}
            </div>
            <div class="row">
              <button type="button" class="btn btn-warning col-2 m-2" @click="connect">1. Connect</button>
              <button type="button" class="btn btn-warning col-2 m-2" @click="addNetwork">2. Add Network</button>
              <button type="button" class="btn btn-warning col-2 m-2" @click="regTokens">3. Add Token</button>
              <button type="button" class="btn btn-warning col-2 m-2" @click="getAwsToken">4. Get AWS Token</button>
              <button type="button" class="btn btn-warning col-2 m-2">5. Get Super Token</button>
              <button type="button" class="btn btn-warning col-2 m-2">6. Block Explorers</button>
              <button type="button" class="btn btn-warning col-2 m-2">7. DAO vote</button>
<!--              <button type="button" class="btn btn-info col-2 m-2">Info</button> https://snapshot.org/#/superbear.eth-->
<!--              <button type="button" class="btn btn-light col-2 m-2">Light</button>-->
<!--              <button type="button" class="btn btn-dark col-2 m-2">Dark</button>-->

<!--              <button type="button" class="btn btn-link col-2">Link</button>-->
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
import Web3 from "web3";
import Tx from 'ethereumjs-tx';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  data() {
    return {
      active: 1,
      account: "Connect"
    }
  },
  created() {

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
    },
    async connect(){
      window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(res =>{
            this.account = res[0];
          })
          .catch((error) => {
            if (error.code === 4001) {
              // EIP-1193 userRejectedRequest error
              console.log('Please connect to MetaMask.');
            } else {
              console.error(error);
            }
          });
    },
    async addNetwork(){
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x7e6',
            chainName: 'Black Warrior',
            rpcUrls: ['https://www.blackwarrior.vip/provider'],
            nativeCurrency: {
              name: "Black Warrior",
              symbol: "BW", // 2-6 characters long
              decimals: 18
            },
            blockExplorerUrls: ["https://www.blackwarrior.vip/blockscout/"]
          },
        ],
      });
    },
    async regTokens(){
      const tokenAddress = '0x80F46e921607a3C44f87E87082FA6222A7322Ee0';
      const tokenSymbol = 'super';
      const tokenDecimals = 18;
      const tokenImage = 'http://placekitten.com/200/300';

      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          console.log('Thanks for your interest!');
        } else {
          console.log('Your loss!');
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAwsToken(){

    }
  },
}
</script>

<style>

</style>
