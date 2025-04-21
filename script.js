


const options = {
	method: 'GET',
	headers: {
		"CDN-RequestId": "de2670f117fe672448ff7f755616594d",
		"Server": "BunnyCDN-DE1-865"
}
	}


fetch('http://api.weatherapi.com/v1/current.json?key=06e80cf273fd457daae125910250804&q=new york&aqi=yes', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		temp_c.innerHTML = response.temp_c
		wind_mph.innerHTML = response.wind_mph
		wind_dir.innerHTML = response.wind_dir
		pressure_mb.innerHTML = response.pressure_mb
		precip_in.innerHTML = response.precip_in
		humidity.innerHTML = response.humidity
		cloud.innerHTML = response.cloud
		feelslike_c.innerHTML = response.feelslike_c
		dewpoint_c.innerHTML = response.dewpoint_c
		region.innerHTML = response.region
		country.innerHTML = response.country
		localtime.innerHTML = response.localtime




	})
	.catch(err => console.error(err))




