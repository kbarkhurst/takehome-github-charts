/* global Chart, axios  */



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
  const [vueResponse, angularResponse, emberjsResponse, svelteResponse, reactResponse] = await Promise.all([
    axios.get("https://api.github.com/repos/vuejs/vue"),
    axios.get("https://api.github.com/repos/angular/angular"),
    axios.get("https://api.github.com/repos/emberjs/ember"),
    axios.get("https://api.github.com/repos/sveltejs/svelte"),
    axios.get("https://api.github.com/repos/facebook/react")
  ]);
  const data = await [vueResponse, angularResponse, emberjsResponse, svelteResponse, reactResponse];
  

  let vuewatcher = vueResponse.data.watchers;
  let angularwatcher = angularResponse.data.watchers;
  let emberjswatcher = emberjsResponse.data.watchers;
  let sveltejswatcher = svelteResponse.data.watchers;
  let reactjswatcher = reactResponse.data.watchers;
  document.getElementById("vuewatcher").innerHTML = vuewatcher;
  document.getElementById("angularwatcher").innerHTML = angularwatcher;
  document.getElementById("emberjswatcher").innerHTML = emberjswatcher;
  document.getElementById("sveltejswatcher").innerHTML = sveltejswatcher;
  document.getElementById("reactjswatcher").innerHTML = reactjswatcher;

  return {
    chart: {
      vue: {
        watchers: vueResponse.data.subscribers_count,
        stars: vueResponse.data.stargazers_count,
        forks: vueResponse.data.forks,
      },
      angular: {
        watchers: angularResponse.data.subscribers_count,
        stars: angularResponse.data.stargazers_count,
        forks: angularResponse.data.forks,
      },
      emberjs: {
        watchers: emberjsResponse.data.subscribers_count,
        stars: emberjsResponse.data.stargazers_count,
        forks: emberjsResponse.data.forks,
      },
      svelte: {
        watchers: svelteResponse.data.subscribers_count,
        stars: svelteResponse.data.stargazers_count,
        forks: svelteResponse.data.forks,
      },
      react: {
        watchers: reactResponse.data.subscribers_count,
        stars: reactResponse.data.stargazers_count,
        forks: reactResponse.data.forks,
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
}
  async function showData(input) {
 
    let info = await vueData()
    console.log(info);
    console.log(input);
    document.getElementById(`${input}` + "title").innerHTML = `${input}`;
    
    const data = {
      labels: [
        'Vue',
        'Angular',
        'Ember',
        'Svelte',
        'React'
      ],
      datasets: [{
        
        data: [info.chart.vue[input], info.chart.angular[input], info.chart.emberjs[input], info.chart.svelte[input], info.chart.react[input]],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 105, 86)',
          'rgb(255, 30, 86)'
        ],
        hoverOffset: 4
      }]
    };
 
    const config = {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          labels: {
            render: 'value',
            fontSize: 16,
            fontStyle: 'bold',
            fontColor: '#FFF',
            fontFamily: '"Lucida Console", Monaco, monospace'
          }
        }
      }
    }
    
    // === include 'setup' then 'config' above ===
    var myChart = new Chart(
      document.getElementById(`${input}`),
      config
    );
};
    
 
showData("watchers");
showData("forks");
showData("stars");


function showText() {
  var elem = document.getElementById('showText');
  elem.classList.add('show');
  document.getElementById('showPies').classList.remove("show");
  document.getElementById('btn-showText').classList.add("active");
  document.getElementById('btn-showPies').classList.remove("active");
  
}
function showPies() {
  document.getElementById('showText').classList.remove("show");
  document.getElementById('btn-showText').classList.remove("active");
  document.getElementById('showPies').classList.add("show");
  document.getElementById('btn-showPies').classList.add("active");
}