import blog from '@/api/blog.js'

export default {
    name: '',
    data () {
      return {
        title: '',
        content: '',
        description: '',
        atIndex: true
      }
    },
    methods: {
      onCreate(){
        blog.createBlog({ title : this.title, content : this.content,
           description : this.description, atIndex : this.atIndex }).then(res=>{
           this.$message({
            message: '创建文章成功',
            type: 'success'
            });
            this.$router.push({path:`/detail/${ res.data.id }`})
           })
      }
    }
  }