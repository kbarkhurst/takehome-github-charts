/* global Chart, axios */


function axiosTest() {
  // create a promise for the axios request
  // const promise = axios.get("https://api.github.com/repos/vuejs/vue");

  // using .then, create a new promise which extracts the data
  // const dataPromise = promise.then((response) => response.data);
  // console.log(response.data);
  // // return it
  // return dataPromise;
  return axios.get("https://api.github.com/repos/vuejs/vue");
}


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



function vueData() {
  return axios({
    url: 'https://api.github.com/repos/vuejs/vue',
    method: 'get',
    timeout: 8000,
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.data)
    .catch(error => console.error(error));
}
vueData()
  .then(
    response => console.log('vueData' + response.data)
  );
  

//     .get("https://api.github.com/repos/vuejs/vue")
//     .then(function (response) {
//       console.log(response.data);
//       let vuewatcher = response.data.watchers;
//       document.getElementById("vuewatcher").innerHTML = vuewatcher;
      
//       console.log("Vue.js Watchers:" + response.data.watchers);
//       return vuewatcher;
//       // this.vuewatcher = response.data.watchers;
//       // console.log("Vue.js Watchers2:" + vuewatcher);
      
      
//     });
// }

// window.doStuff = function() {
//   vueData();
//   console.log("From other function:" + vueData());
//   // let's make this a wrapper function
//   // make other functions async
//   // get the data once it's done - await the axios request
//   // make the chart
// }
// function makeChart() {
//   const data = {
//     labels: [
//       'Vue',
//       'Angular',
//       'Ember'
//     ],
//     datasets: [{
//       label: 'Watchers',
//       data: ["vuewatcher", 1000, 5000],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4
//     }]
//   };
 
//   const config = {
//     type: 'pie',
//     data: data,
//   };
//   // === include 'setup' then 'config' above ===
//   var myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
// }
  
  
// console.log("VueData:" + vueData());
