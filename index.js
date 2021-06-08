/* global Chart, axios */

let vueData = () => {
  axios.get("https://api.github.com/repos/vuejs/vue")
    .then(function (response) {
      console.log(response.data);
      let vuewatcher = response.data.watchers;
      document.getElementById("vuewatcher").innerHTML = vuewatcher;
      console.log("Vue.js Watchers:" + response.data.watchers);
      


      const data = {
        labels: [
          'Vue',
          'Angular',
          'Ember'
        ],
        datasets: [{
          label: 'Watchers',
          data: [vuewatcher, 1000, 5000],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
 
      const config = {
        type: 'pie',
        data: data,
      };
      // === include 'setup' then 'config' above ===
      var myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    });
  // .catch(function (error) {
  //   console.log(error);
};

    




