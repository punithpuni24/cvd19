//main.js

  // Catch and print errors if any
!async function(){
let getdataTotal = await 
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=undefined", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "1e88d56748msh1da171f355659d2p18d333jsnd1a4d980304a"
        }
    })
    .then(response => response.json()) // Getting the actual response data
    .then(data => { 
		return data[0];
    })
    .catch(err => {
        console.log(err);
    }); 
	var ctx = document.getElementById("myChart").getContext('2d'); 
	var confirmed = getdataTotal.confirmed;
	var recovered = getdataTotal.recovered;
	var deaths = getdataTotal.deaths;
	document.getElementById('confirmed').innerHTML = confirmed;
	document.getElementById('recovered').innerHTML = recovered;
	document.getElementById('deaths').innerHTML = deaths;
	var data=[];
	data.push(confirmed);
	data.push(recovered);
	data.push(deaths);
	var myChart = new Chart(ctx, {
	  type: 'pie',
	  data: {
		labels: ["confirmed", "recovered", "deaths"],
		datasets: [{
		  backgroundColor: [
			"#3498db",
			"#2ecc71",
			"#FF0000",
		  ],
		  data: data
		}]
	  }
	});
}();