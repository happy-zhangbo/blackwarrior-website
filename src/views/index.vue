<template>
  <div>
    <div class="p-5 bg-dark text-white text-center">
      <h1>Black Warrior Chain</h1>
    </div>
    <div class="container-xxl mt-3">
      <div class="row justify-content-md-center">
        <button type="button" class="btn bg-dark text-light col-md-2 m-2" @click="connect">Connect Wallet</button>
        <a type="button" class="btn bg-dark text-light col-md-2 m-2" href="https://explorer.blackwarrior.vip/#" target="_blank">Block Explorers</a>
      </div>
      <div>
        ps:  The above contents are all test functions
      </div>
      <br />
      <br />
      <div>Account: {{ account }}</div>
      <div>ChainId: {{ id }}</div>
      <div>Balance: {{ balance }}</div>
<!--      <div>ERC20Token: {{ account }}</div>-->
    </div>
    <br />
    <div class="p-4 bg-dark text-white text-center fixed-bottom">
      <p>@2022 <a href="https://www.blackwarrior.vip">blackwarrior.vip</a></p>
    </div>
  </div>
</template>

<script>
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  data() {
    return {
      active: 1,
      account: "Please connect metamask wallet",
      balance: 0,
      id: 0,
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
      var provider = await detectEthereumProvider();
      if (!provider) {
        console.log('Please install MetaMask!');
        return;
      }
      var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      var web3 = new Web3(window.ethereum);
      this.account = accounts[0];
      var chainID = await web3.eth.getChainId();
      this.id = chainID;
      var balance = await web3.eth.getBalance(accounts[0]);
      this.balance = web3.utils.fromWei(balance,'ether');
      if(chainID != "1008"){
        await this.addNetwork()
        this.connect();
      }
    },
    async addNetwork(){
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x3f0',
            chainName: 'Black Warrior',
            rpcUrls: ['https://www.blackwarrior.vip/eth'],
            iconUrls: ["http://explorer.blackwarrior.vip/images/l.jpg"],
            nativeCurrency: {
              name: "Black Warrior",
              symbol: "BAK", // 2-6 characters long
              decimals: 18
            },
            blockExplorerUrls: ["https://explorer.blackwarrior.vip/"]
          },
        ],
      });
    },
    async regTokens(){
      const tokenAddress = '0xfd454Fad553770262E1e0c3c3D6f9B2170042C6B';
      const tokenSymbol = 'AB';
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
      //
      this.$swal({
        title: '<strong>Join <u>Discord</u></strong>',
        html: 'You need to join my discord server, send your ethereum address in the <b>`airdrop-token`</b> channel.',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Join Discord!'
      }).then(result => {
        if (result.isConfirmed) {
          window.open("https://discord.gg/9Jsa24JS");
        }
      })
    },
    async getSuperToken(){
      this.$swal({
        title: '<strong>Join <u>Discord</u></strong>',
        html: 'You need to join my discord server, send your ethereum address in the <b>`airdrop-super-token`</b> channel.',
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Join Discord!'
      }).then(result => {
        if (result.isConfirmed) {
          window.open("https://discord.gg/9Jsa24JS");
        }
      })
    }
  },
}
</script>

<style>

</style>
