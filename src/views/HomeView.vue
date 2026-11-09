<template>
    <div id="app" class="appcontainer">
    <h1>Random Quote Generator</h1>

    <!-- Display the quote or a loading message -->
    <p v-if="loading">Loading...</p>
    <p v-else>"{{ quote }}"</p>   <p class="author">— {{ author }}</p>
    <!-- The button that triggers the API call -->
    <button @click="getQuote">Get New Quote</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      quote: '',      // stores the quote text
      author: '',     // stores the author text
      loading: false  // tracks loading status
    }
  },
  methods: {
    async getQuote() {
      this.loading = true
      try {
        const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
          headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': '40a365892fmsh23cc8c711dbee0bp1e9b1djsn5f631ae4d818'
          }
        })
        
        this.quote = response.data.content
        this.author = response.data.originator ? response.data.originator.name : 'Unknown'
      } catch (error) {
        console.error('Error fetching quote:', error)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.getQuote()
  }
}
</script>

<style>

.appcontainer {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}
</style>


