var apiKey = config.API_KEY;

var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap&v=weekly";
document.getElementById("map-api").parentNode.appendChild(script);