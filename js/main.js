console.log("hello");

// create breakfast objects

let cereal = {
	name: "lucky charms",
	cold: true,
	calories: 300
};

let fruit = {
	name: "apple",
	cold: true,
	calories: 95
};

let eggs = {
	name: "eggs",
	cold: false,
	calories: 150
};

//breakfast array of objects

const breakfastArray = [cereal, fruit, eggs];

console.log(breakfastArray);

const breakfastContainer = document.querySelector("#breaky");

console.log(breakfastContainer);

function breakfast(array) {
	return `
    <div>
        <h1 style="color: blue; text-align: center">${array.name}</h1>
        <p style="color: aqua; text-align: center">Cold? ${array.cold} </p>
        <p style="color: red; text-align: center"> Calories: ${array.calories}</p>
    </div>

    `;
}

breakfastArray.forEach(element => {
	breakfastContainer.innerHTML += breakfast(element);
});

// breakfast(breakfastArray);
