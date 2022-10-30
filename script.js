const fetchData = (url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "286b83264cmsh7a7cf5556382ab7p1eaca6jsn23688fe2226d",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      showDataCovid(response);
    })
    .catch((err) => console.error(err));
};

const fetchDataCountry = (url) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "286b83264cmsh7a7cf5556382ab7p1eaca6jsn23688fe2226d",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      if (response.results == 0) {
        alert("Data covid tidak ditemukan!");
      } else {
        showDataCovid(response);
      }
    })
    .catch((err) => console.error(err));
};

const getCovidStatistic = () => {
  let url = "https://covid-193.p.rapidapi.com/statistics?country=Indonesia";
  fetchData(url);
};

const getCountry = (country) => {
  let url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;
  fetchDataCountry(url);
};

window.onload = () => {
  getCovidStatistic();
};

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

function capitalizeFirstLetter(str) {
  return (capitalized = str.charAt(0).toUpperCase() + str.slice(1));
}

const showDataCovid = (data) => {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const country = document.getElementById("country");
  const date = document.getElementById("date");
  const dataConfirm = document.getElementById("totalConf");
  const active = document.getElementById("active");
  const recovery = document.getElementById("recovery");
  const death = document.getElementById("death");

  button.onclick = () => {
    if (input.value == "") {
      alert("Anda belum memasukan nama negara!");
    } else {
      getCountry(input.value);
      input.value = "";
    }
  };
  country.innerText = capitalizeFirstLetter(data.parameters.country);
  date.innerText = data.response[0].day;
  dataConfirm.innerText = formatNumber(data.response[0].cases.total);
  active.innerText = formatNumber(data.response[0].cases.active);
  recovery.innerText = formatNumber(data.response[0].cases.recovered);
  death.innerText = formatNumber(data.response[0].deaths.total);
};
