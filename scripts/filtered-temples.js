var date = new Date();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;

document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Mesa Arizona",
	  location: "Mesa, Arizona, United States",
	  dedicated: "1927, October, 23-27",
	  area: 75000,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-22546.jpg"
	},
	{
	  templeName: "Gila Valley Arizona",
	  location: "Gila Valley, Arizona, United States",
	  dedicated: "2009, February, 14",
	  area: 18561,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/the-gila-valley-arizona-temple/the-gila-valley-arizona-temple-4020.jpg"
	},
	{
	  templeName: "Gilbert Arizona",
	  location: "Gilbert, Arizona, United States",
	  dedicated: "2014, March, 2",
	  area: 85326,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3801.jpg"
  },
	{
	  templeName: "Snowflake Arizona",
	  location: "Snowflake, Arizona, United States",
	  dedicated: "2002, March, 3",
	  area: 18621,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/snowflake-arizona-temple/snowflake-arizona-temple-64079.jpg"
	},
	{
	  templeName: "Phoenix Arizona",
	  location: "Phoenix, Arizona, United States",
	  dedicated: "2014, November, 16",
	  area: 64870,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711.jpg"
	},
	{
	  templeName: "Tuscon Arizona",
	  location: "Tuscon, Arizona, United States",
	  dedicated: "2017, August, 13",
	  area: 38216,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/tucson-arizona-temple/tucson-arizona-temple-64676.jpg"
	},
	{
	  templeName: "Monticello Utah",
	  location: "Monticello, Utah, United States",
	  dedicated: "1998, July, 26-27",
	  area: 11225,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/monticello-utah-temple/monticello-utah-temple-66453.jpg"
	},

	{
		templeName: "Ogden Utah",
		location: "Ogden, Utah, United States",
		dedicated: "1972, January, 18-20",
		area: 112232,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-55089.jpg"
	  },
	  {
		templeName: "San Diego California",
		location: "San Diego, Calfornia, United States",
		dedicated: "1993, April, 25-30",
		area: 72000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-2943.jpg"
	  },
	  {
		templeName: "Nauvoo Illinois",
		location: "Nauvoo, Illinois, United States",
		dedicated: "2002, June, 27-20",
		area: 54000,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576.jpg"
	  },
		{
		templeName: "Sapporo Japan",
		location: "Sapporo, Japan",
		dedicated: "2016, August, 21",
		area: 48480,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-65780.jpg"
	  },
  	  {
		templeName: "London England",
		location: "Surrey, England, United Kingdom",
		dedicated: "1958, September, 7-9",
		area: 42652,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-55586.jpg"
	  },

  ];

  const oldButton = document.querySelector("#old");
  const newButton = document.querySelector("#new");
  const largeButton = document.querySelector("#large");
  const smallButton = document.querySelector("#small");

  temples.forEach(temple => {
	document.getElementById("card").innerHTML += (card(temple));
  });
  

  oldButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let old = temples.filter(temple => parseInt(temple.dedicated.substring(0,4))<1900);
	old.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  newButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let newones = temples.filter(temple => parseInt(temple.dedicated.substring(0,4))>2000);
	newones.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  largeButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let large = temples.filter(temple => temple.area>90000);
	large.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  smallButton.addEventListener("click", () => {
	document.getElementById("card").innerHTML = "";
	let small = temples.filter(temple => temple.area<10000);
	small.forEach(temple => {
		document.getElementById("card").innerHTML += (card(temple));
	  });
  });

  function card(temple) {
	var name = `<h3>${temple.templeName}</h3> <br>`;
	var location = `<p>Location: ${temple.location}</p> <br>`;
	var date = `<p>Dedicated: ${temple.dedicated}</p> <br>`;
	var area = `<p>Size: ${temple.area} Square feet</p> <br>`;
	var url = `<img src="${temple.imageUrl}" loading="lazy" alt="picture of the ${temple.templeName} temple." > <br>`;
	var figure = `<figure>${name}${location}${date}${area}${url}</figure>`
	return figure;
  }