const container = document.querySelector(".character_container");

//List the default characters on page load
fetch("https://swapi.dev/api/people/")
	.then((response) => response.json())
	.then((data) => {
		let people = data.results;
		people.forEach((person) => {
			const xterCard = document.createElement("div");
			xterCard.classList.add("xterCard");
			const name = document.createElement("h3");
			name.classList.add("name");
			name.innerText = person.name;
			const gender = document.createElement("p");
			gender.classList.add("attribute");
			gender.innerText = `Gender: ${person.gender}`;
			const hair_color = document.createElement("p");
			hair_color.classList.add("attribute");
			hair_color.innerText = `Hair Color: ${person.hair_color}`;
			const skin_color = document.createElement("p");
			skin_color.classList.add("attribute");
			skin_color.innerText = `Skin Color: ${person.skin_color}`;
			xterCard.appendChild(name);
			xterCard.appendChild(gender);
			xterCard.appendChild(hair_color);
			xterCard.appendChild(skin_color)
			container.appendChild(xterCard);
		});
	});
