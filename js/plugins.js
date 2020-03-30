


//plugins js
fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "1e88d56748msh1da171f355659d2p18d333jsnd1a4d980304a"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

  // Catch and print errors if any
!async function(){
let getdataAllCountiresList = await 
    fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "1e88d56748msh1da171f355659d2p18d333jsnd1a4d980304a"
	}
	})
    .then(response => response.json()) // Getting the actual response data
    .then(data => { 
		return data.response;
    })
    .catch(err => {
        console.log(err);
    }); 
	var tdata = '';
	var updatedTime = getdataAllCountiresList[0].time;
	var time = new Date(updatedTime); 
	var convertedTime =time.toLocaleString(); 
	document.getElementById('updatedTime').innerHTML = 'List of All Countries with Last Updated time  ' + convertedTime ;
	getdataAllCountiresList.forEach(function(item, index) {
		let tdata = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.innerHTML=item.country;
		tdata.appendChild(td1);
		let td2 = document.createElement('td');
		td2.innerHTML=item.cases.active;
		tdata.appendChild(td2);
		let td3 = document.createElement('td');
		td3.innerHTML=item.deaths.total;
		tdata.appendChild(td3);
		//let finaldata = document.querySelector('.tableData');
		 document.querySelector('.tableData').appendChild(tdata);
	});
}();
