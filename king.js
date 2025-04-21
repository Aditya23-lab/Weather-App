

// 
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6bfa1f203cmshbec55e7827a7124p1cd656jsnb29fa517babd',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
}

const getWeather = (q) => {
	cityname.innerHTML = q;
  
	fetch(`http://api.weatherapi.com/v1/current.json?key=06e80cf273fd457daae125910250804&q=${q}`)
	  .then(response => response.json())
	  .then((response) => {
		console.log(response);
		temp_c.innerHTML = response.current.temp_c + "°C";
		temp_c2.innerHTML = response.current.temp_c + "°C";
		wind_mph.innerHTML = response.current.wind_mph + " mph";
		wind_dir.innerHTML = response.current.wind_dir;
		
		humidity.innerHTML = response.current.humidity + " %";
		cloud.innerHTML = response.current.cloud + " %";
		cloud2.innerHTML = response.current.cloud + " %";
		feelslike_c.innerHTML = response.current.feelslike_c + "°C";
		
  
		region.innerHTML = response.location.region;
		region2.innerHTML = response.location.region;
		country.innerHTML = response.location.country;
		localtime.innerHTML = response.location.localtime;
		
	  })
	  .catch(err => console.error(err));
  };
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(q.value);
  });
  const updateOtherCities = () => {
	const cities = [
	  { name: "Patna", id: "patna" },
	  { name: "Goa", id: "goa" },
	  { name: "Japan", id: "japan" },
	  { name: "Australia", id: "australia" }
	];
  
	cities.forEach(city => {
	  fetch(`http://api.weatherapi.com/v1/current.json?key=06e80cf273fd457daae125910250804&q=${city.name}`)
		.then(res => res.json())
		.then(data => {
		  document.getElementById(`${city.id}-country`).innerText = data.location.country;
		  document.getElementById(`${city.id}-temp`).innerText = data.current.temp_c + "°C";
		  document.getElementById(`${city.id}-humidity`).innerText = data.current.humidity + " %";
		  document.getElementById(`${city.id}-cloud`).innerText = data.current.cloud + " %";
		})
		.catch(err => console.error(`Error loading weather for ${city.name}:`, err));
	});
  };
  
  
  getWeather("New York");
  updateOtherCities(); 
  setInterval(updateOtherCities, 3000); 

  