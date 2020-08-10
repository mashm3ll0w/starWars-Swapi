const container = document.querySelector(".character_container");

//List the default characters on page load
fetch("https://swapi.dev/api/people/")
	.then((response) => response.json())
	.then((data) => {
		let people = data.results;
		// people.forEach((person) => {
			const xterCard = document.querySelector(".xterCard");
			const name = document.querySelector(".name");
			name.innerText = people[0].name;
			const gender = document.querySelector(".gender");
			gender.innerText = `Gender: ${people[0].gender}`;
			const hair_color = document.querySelector(".hair_color");
			hair_color.innerText = `Hair Color: ${people[0].hair_color}`;
			const skin_color = document.querySelector(".skin_color");
			skin_color.innerText = `Skin Color: ${people[0].skin_color}`;
			xterCard.appendChild(name);
			xterCard.appendChild(gender);
			xterCard.appendChild(hair_color);
			xterCard.appendChild(skin_color);
			container.appendChild(xterCard);
		// });
	});
