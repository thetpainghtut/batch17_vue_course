<template>
  <div class="container">
    <h1 class="text-danger text-center">All Item Lists</h1>
    <div class="row">
      <div class="col-md-4" v-for="(row,index) in items" :key="index">
        <b-card
          :title="row.item_name"
          :img-src="row.item_photo"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <b-card-text>
            <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
            {{row.item_desc}}
          </b-card-text>

          <p>Brand: {{row.brand.brand_name}}</p>
          <p>Subcategory: {{row.subcategory.subcategory_name}}</p>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return{
        items: []
      }
    },
    mounted(){
      this.getItems();
    },
    methods:{
      getItems(){
        this.$http.get('http://osapi.thetpainghtut.com/api/v1/items')
          .then(response=>{
            // console.log(response)
            this.items  = response.data.items
          })
      }
    },
    filters:{
      // currencydecimal (value) {
      //   return value.toFixed(2)
      // }
    }
  }
</script>

<style type="text/css" scoped>
  
</style>