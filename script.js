let city = "india";

async function weatherShow(city) {
  try {
    const apiKey = `134fcee1f8c4f12526100984e68b9ce6`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let data = await fetch(url);
    let rawData = await data.json();
    
    console.log(Math.round(rawData.main.temp));
  } catch (e) {
    console.log(e.message);
  }
}
weatherShow(city);
