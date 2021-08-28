<template>
  <div>
      <div v-html="content"></div>

      <ul v-if="errors && errors.length">
            <li v-for="(error, index) of errors" :key="index">
                {{error.message}}
            </li>
      </ul>
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