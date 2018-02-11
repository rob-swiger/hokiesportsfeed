const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    selected: ''
  },
  mounted() {
    axios.get("https://newsapi.org/v2/everything?q=virginia%20tech%20hokies&pageSize=50&sortBy=publishedAt&apiKey=c0c101ad637a40188ac8ca2319bdb3c9")
    .then(response => {this.results = response.data.articles})
  },

  methods: {
         onChange: function (){
         	var self = this
          if (this.selected == 'All Hokie Sports') {
            axios.get("https://newsapi.org/v2/everything?q=virginia%20tech%20hokies&pageSize=50&sortBy=publishedAt&apiKey=c0c101ad637a40188ac8ca2319bdb3c9")
            .then(response => {this.results = response.data.articles})
          } else {
            axios.get('https://newsapi.org/v2/everything?q=virginia%20tech%20hokies%20'+this.selected+'&pageSize=50&sortBy=publishedAt&apiKey=c0c101ad637a40188ac8ca2319bdb3c9')
             .then(response => {this.results = response.data.articles})
          }
         }
    }
});
