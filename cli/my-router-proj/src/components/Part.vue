<template>
  <div class="part">
    
    <b-list-group class="mt-3">
      <b-list-group-item v-for="(tag,index) in tags" :key="index" class="d-flex justify-content-between align-items-center">
        <small>{{tag.tag_name}}</small>
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script type="text/javascript">
  import MyService from '@/services/MyService.js'

  export default{
    name: 'Part',
    props:{
      parent: String
    },
    data(){
      return {
        tags:[]
      }
    },
    mounted(){
      MyService.getTags()
        .then(response => {
          // console.log(response)
          this.tags = response.data.tags
        })
        .catch(err => {
          console.log('There was an error:',err.response)
        })
    }
  }
</script>
