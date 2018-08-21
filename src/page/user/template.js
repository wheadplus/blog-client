import blog from '@/api/blog.js'

export default {
    name: '',
    data () {
      return {
        blogs: [],
        user: {},
        page: 1,
        total: 0
      }
    },
    methods: {
      onPageChange(newPage) {
        blog.getBlogsByUserId(this.userId, { page: newPage }).then(res => {
          //console.log(res)
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          this.$router.push({ path: `/user/${this.userId}`, query: { page: newPage}})
        })
      },
      splitDate(dateStr){
        let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
        return {
          date: dateObj.getDate(),
          month: dateObj.getMonth() + 1,
          year: dateObj.getFullYear()
        }
      }
    },
    created(){
      // this.$route.params.userId 
      this.page = this.$route.query.page || 1
      blog.getBlogsByUserId(this.$route.params.userId, { page:this.page }).then(res => {
        
       // console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        if(res.data.length > 0) {
          this.user = res.data[0].user
        }
      }) 
    }
  }