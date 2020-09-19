<template>
    <div>
        <h1>Register Page</h1>
        <input type="email" v-model="email" name="email" placeholder="email"/>
        <input type="password" v-model="password" name="password" placeholder="isi password"/>
        <button @click="register">kirim</button>
    </div>
</template>
<script>
import AuthenthicationService from '../service/AuthenthicationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''

    }
  },
  // watch: {
  //   email (valeu) { console.log('email berubah menjadi @rabu daru yang namnaya', valeu) }
  // }, ngetesss
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'hello@emounted () {
  //   setTimeout(() => {
  //     this.email = 'hello@email.com'
  //   }, 2000)
  // }mail.com'
  //   }, 2000)
  // } ngetes
  methods: {
    register: async function () {
      // console.log('udah di klik', this.email, this.password) ngetes
      let response = await AuthenthicationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
