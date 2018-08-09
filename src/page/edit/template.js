import blog from '@/api/blog.js'

export default {
    name: '',
    data () {
      return {
        title: '',
        content: '',
        description: '',
        atIndex: true,
        blogId: null
      }
    },
    created(){
      this.blogId = this.$route.params.blogId
      blog.getDetail({ blogId: this.$route.params.blogId}).then(res => {
        this.title = res.data.title
        this.description = res.data.description
        this.content = res.data.content
        this.atIndex = res.data.atIndex
      })
      
    },
    methods: {
      onEdit(){
        blog.updateBlog({blogId : this.blogId},{ title : this.title, content : this.content,
           description : this.description, atIndex : this.atIndex }).then(res=>{
           this.$message({
            message: '修改文章成功',
            type: 'success'
            });
            this.$router.push({path:`/detail/${ res.data.id }`})
           })
      }
    }
  }