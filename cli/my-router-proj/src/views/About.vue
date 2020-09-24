<template>
  <div class="container about">
    <div class="row">
      <div class="col-md-8">

        <b-card v-for="(post,index) in posts" :key="index" :title="post.post_title" class="my-3">
          <b-card-text>
            {{post.post_content}}
          </b-card-text>
          <router-link :to="{name: 'Testing', params: { id: post.post_id }}">
            <b-button variant="primary">Show Detail <b-icon icon="arrow-return-right"></b-icon></b-button>
          </router-link>
        </b-card>

      </div>
      <div class="col-md-4">
        <Part parent="About Page"></Part>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  // @ is an alias to /src
  import Part from '@/components/Part.vue'
  import MyService from '@/services/MyService.js'

  export default{
    name: 'About',
    components: {
      Part
    },
    data(){
      return{
        posts: []
      }
    },
    mounted(){
      MyService.getPosts()
        .then(response => {
          // console.log(response)
          this.posts = response.data.posts
        })
        .catch(err => {
          console.log('There was an error:',err.response)
        })
    },
    methods:{

    }
  }
</script>
