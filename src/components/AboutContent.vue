<template>
  <div >
      <div v-html="content"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AboutContent',
  data() {
     return {
        content: "",
        errors: []
     } 
  },

  created() {
    axios.get(`http://ec2-3-88-48-245.compute-1.amazonaws.com/wp-json/pages/v2/archive?id=27`)
    .then(response => {
      this.content = response.data.content;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
<style scoped>

    /deep/ h2 {
        text-align: left;
        font-weight: bold;
        padding-top:10px;
        padding-bottom: 10px;
    }

    /deep/ p {
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>