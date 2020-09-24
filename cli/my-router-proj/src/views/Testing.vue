<template>
  <div class="container testing">
    <div class="row">
      <div class="col-md-8 text-left">
        <h5 class="text-danger mt-3">{{post.post_title}}</h5>
        <img src="@/assets/detail.png" class="img-fluid w-50">
        <p>{{post.post_content}}</p>

        <p>
          <span v-for="(tag,index) in post.post_tags" :key="index" class="mr-2">
            <b-icon icon="tags"></b-icon> {{tag.tag_name}}
          </span>
        </p>

        <p>Uploaded: {{post.created_at}}</p>
      </div>
      <div class="col-md-4">
        <Part parent="Testing Page"></Part>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
  import Part from '@/components/Part.vue'
  import MyService from '@/services/MyService.js'

  export default{
    name: 'Testing',
    components: {
      Part
    },
    data(){
      return{
        post: Object
      }
    },
    mounted(){
      let id = this.$route.params.id;
      MyService.getPost(id)
        .then(response => {
          // console.log(response)
          this.post = response.data.post
        })
        .catch(err => {
          console.log('There was an error:',err.response)
        })
    }
  }
</script>