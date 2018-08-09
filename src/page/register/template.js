import { mapActions } from 'vuex'
export default {
    name: '',
    data () {
      return {
        username: "",
        password: ''
      }
    },
    methods: {
      onRegister(){
        //console.log(this.username + '' + this.password)
        this.register({ username: this.username, password: this.password }).then(()=>{
          this.$router.push('/')
        })
      },
      ...mapActions([
        'register'
      ])
    }
  }