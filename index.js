/* global Chart, axios */


// function axiosTest() {
//   // create a promise for the axios request
//   // const promise = axios.get("https://api.github.com/repos/vuejs/vue");

//   // using .then, create a new promise which extracts the data
//   // const dataPromise = promise.then((response) => response.data);
//   // console.log(response.data);
//   // // return it
//   // return dataPromise;
//   return axios.get("https://api.github.com/repos/vuejs/vue");
// }


// now we can use that data from the outside!
// axiosTest()
//   .then(({ data }) => {
//     vuewatcher = data.watchers;
//     // response.json({ message: 'Request received!', data });
//   })
//   .catch(err => console.log(err));
  

// const watcherData = async() => await vuewatcher.json()
// console.log(watcherData);

// const lst = [];  
// const populateData = (data) => {
//   lst.push(data); 
// };
// function axiosTest (populateData) {
//   axios.get("https://api.github.com/repos/vuejs/vue")
//     .then(function(response) {
//       populateData(response.data.watchers);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }
// axiosTest();
// console.log("Lst" + lst);
// console.log("Data" + populateData);



async function vueData() {
  const [vueResponse, angularResponse, emberjsResponse, svelteResponse] = await Promise.all([
    axios.get("https://api.github.com/repos/vuejs/vue"),
    axios.get("https://api.github.com/repos/angular/angular"),
    axios.get("https://api.github.com/repos/emberjs/ember"),
    axios.get("https://api.github.com/repos/sveltejs/svelte")
  ]);
  const data = await [vueResponse, angularResponse, emberjsResponse, svelteResponse];
  

  let vuewatcher = vueResponse.data.watchers;
  let angularwatcher = angularResponse.data.watchers;
  let emberjswatcher = emberjsResponse.data.watchers;
  let sveltejswatcher = svelteResponse.data.watchers;
  document.getElementById("vuewatcher").innerHTML = vuewatcher;
  document.getElementById("angularwatcher").innerHTML = angularwatcher;
  document.getElementById("emberjswatcher").innerHTML = emberjswatcher;
  document.getElementById("sveltejswatcher").innerHTML = sveltejswatcher;
  
  return {
    chart: {
      vue: {
        watchers: vueResponse.data.watchers,
        stars: vueResponse.data.stargazers_count,
        forks: vueResponse.data.forks,
      },
      angular: {
        watchers: angularResponse.data.watchers,
        stars: angularResponse.data.stargazers_count,
        forks: angularResponse.data.forks,
      },
      emberjs: {
        watchers: emberjsResponse.data.watchers,
        stars: emberjsResponse.data.stargazers_count,
        forks: emberjsResponse.data.forks,
      },
      svelts: {
        watchers: svelteResponse.data.watchers,
        stars: svelteResponse.data.stargazers_count,
        forks: svelteResponse.data.forks,
      }
    }
    // .then(function (response) {
    //   console.log(response.data);
    //   let vuewatcher = response.data.watchers;
    //   document.getElementById("vuewatcher").innerHTML = vuewatcher;
      
    //   console.log("Vue.js Watchers:" + response.data.watchers);
    //   return vuewatcher;
    // this.vuewatcher = response.data.watchers;
    // console.log("Vue.js Watchers2:" + vuewatcher);
      
      
  }
  async function showData() {
  
    let info = await vueData()
    console.log(info);
    // let vueWatcher = await vueData()
    // let angularWatcher = await vueData()
    // let emberjsWatcher = await vueData()
    const data = {
      labels: [
        'Vue',
        'Angular',
        'Ember',
        'Svelte'
      ],
      datasets: [{
        label: 'Watchers',
        data: [info.chart.vue.watchers, info.chart.angular.watchers, info.chart.emberjs.watchers, info.chart.svelte.watchers],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 105, 86)',
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
  };
}
showData();