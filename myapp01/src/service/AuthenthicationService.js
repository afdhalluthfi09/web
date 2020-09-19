import Api from '@/service/Api'
export default {
  register (credential) {
    return Api().post('register', credential)
  }
}
