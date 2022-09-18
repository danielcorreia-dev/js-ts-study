function myScope () {
    const form = document.querySelector('form');
    const result = document.querySelector('.box-result')

    const people = []

    function createPeople(name, lastName, weight, height){
        let obj = {
                name,
                lastName,
                weight,
                height
            };
        return obj;
    }

    const name = form.querySelector('#name'); // You can select childs inside an element == form.querySelector("child-element") 
    const lastName = form.querySelector('#lastName');
    const weight = form.querySelector('#weight');
    const height = form.querySelector('#height');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // people.push(createPeople(name.value, lastName.value, weight.value, height.value)); // You don't need to create a function
        people.push({ // Works in the same way 
            name: name.value,
            lastName: lastName.value,
            weight: weight.value,
            height: height.value
        })

        console.log(people)
        result.innerHTML += `<p>${name.value} ${lastName.value} with ${weight.value} and ${height.value} tall</p>`
    });
}

myScope();