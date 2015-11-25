

function queryObject(){
 	var cars = document.getElementById("cars");
 	var selectedCar = cars.options[cars.selectedIndex].value;

 	var data = null;

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === this.DONE) {
    		console.log(this.responseText);
  		}
	});

	xhr.open("GET", "https://[yourAppId].stamplayapp.com/api/cobject/v1/cobjectId/find"/selectedCar);
	xhr.setRequestHeader("accept", "application/json");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(data);
}