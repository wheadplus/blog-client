// import request from '@/helpers/request'
// import auth from '@/api/auth.js'
import blog from '@/api/blog'
// window.request = request
// window.auth = auth


export default {
    name: '',
    data () {
      return {
        blogs: [],
        page: 1,
        total: 0,
        totalPage: 0,
      }
    },
    methods: {
      showBlogs(){
        blog.getIndexBlogs({ page : this.page }).then(res=>{
          //console.log(res)
          this.blogs = res.data
          this.page = res.page
          this.total = res.total
          this.totalPage = res.totalPage
        }) 
      },
      handlePage(currentPage){
        blog.getIndexBlogs({ page : currentPage }).then(res=>{
          //console.log(res)
          this.blogs = res.data
          this.page = res.page
          this.total = res.total
          this.totalPage = res.totalPage
          this.$router.push({ path: `/?page=${ currentPage }`})
        }) 
      }
    },
    created(){
      this.page = parseInt(this.$route.query.page)
      this.showBlogs()
    }
  }