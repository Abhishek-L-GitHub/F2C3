async function fetchData() {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"; 
    let response = await fetch(url)
    let data = await response.json();
    document.write(data); 
}
fetchData();
