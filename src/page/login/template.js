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
      onLogin(){
        //console.log(this.username + '' + this.password)
        this.login({ username: this.username, password: this.password }).then(()=>{
          this.$router.push('/')
        })
      },
      ...mapActions([
        'login'
      ])
    }
  }