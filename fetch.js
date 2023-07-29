async function fetchCities() {
    let url = "https://bus-booking-accio.onrender.com/all/cities"; 
    let response = await fetch(url)
    let data = await response.json();
    appendCities(data.cities_list); 
}
