const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://newsapi.org/v2/everything?q=virginia%20tech%20hokies&pageSize=100&sortBy=publishedAt&apiKey=c0c101ad637a40188ac8ca2319bdb3c9")
    .then(response => {this.results = response.data.articles})
  }
});
