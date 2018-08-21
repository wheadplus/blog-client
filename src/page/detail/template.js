import marked from 'marked'
import blog from '@/api/blog'
export default {
    name: '',
    data () {
      return {
        title: "",
        content: '',
        description: '',
        user: {},
        createdAt: '',
      }
    },
    computed: {
      markdown(){
        return marked(this.content)
      }
    },
    created(){
      //console.log(this.$route.params.blogId) 
      blog.getDetail({ blogId: this.$route.params.blogId }).then(res => {
        //console.log(res.data)
        this.title = res.data.title
        this.content  = res.data.content
        this.description = res.data.description
        this.user = res.data.user
        this.createdAt = res.data.createdAt
      })
    },

  }