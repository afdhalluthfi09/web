<template>
    <div>
        <h1>Register Page</h1>
        <input type="email" v-model="email" name="email" placeholder="email"/>
        <input type="password" v-model="password" name="password" placeholder="isi password"/>
        <button>kirim</button>
    </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      email: 'a@bock.com',
      password: '123'

    }
  },
  watch: {
    email (valeu) { console.log('email berubah menjadi @rabu daru yang namnaya', valeu) }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello@email.com'
    }, 2000)
  }

}
</script>

<style scoped>
</style>
