<template>
  <div>Sup</div>
  <button @click="walletConnection">Connect wallet</button>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import Web3 from "web3"
  import { Accounts } from "web3-eth-accounts"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  declare var window: any

  export default defineComponent({
    name: "HelloWorld",
    props: {
      msg: String,
    },
    methods: {
      async walletConnection() {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
          try {
           this.account = await window.ethereum.request({ method: "eth_requestAccounts" })
            
            const web3 = new Web3(window.ethereum)
          } catch (e) {
            const result = (e as Error).name + (e as Error).message
            console.log(result)
          }
        } else {
          alert("u dont have crypto wallet")
        }
      },
    },
    data(){
      return{
        account: '' as any,
        provider: window.ethereum
      }
    }
  })
</script>

<style scoped>
  button {
    background-color: transparent;
    border-radius: 6px;
    padding: 12px;
  }
</style>
