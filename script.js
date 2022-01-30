const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const url = "https://starwars.egghead.training/";

const changeButton = document.getElementById("change_button")

starWars = endpoint => {

    fetch(url + endpoint)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            output.innerHTML = `There are ${res.length} films in Starwars history`
            res.forEach(item => {
                console.log(`Film episode_${item.episode_id} title is "${item.title}.`);
            });
        }).catch(err => console.log(err))
}
starWars("films")
starWarsCount = (endpoint) => {
    return fetch(url + endpoint)
        .then(res => res.json())
        .catch(err => console.log(err))
}
Promise.all([starWarsCount("planets"), starWarsCount("species"), starWarsCount("people"), starWarsCount("starships"), starWarsCount("vehicles")]).then(response => {
    console.log(response);
    console.log(`There are ${response[0].length} planets in Starwars history`);
    console.log(`There are ${response[1].length} species in Starwars history`);
    console.log(`There are ${response[2].length} people in Starwars history`);
    console.log(`There are ${response[3].length} starships in Starwars history`);
    console.log(`There are ${response[4].length} vehicles in Starwars history`);
    output.innerHTML += `there are
        ${response[0].length} planets,
        ${response[1].length} species,
        ${response[2].length} people,
        ${response[3].length} starships,
        ${response[4].length} vehicles planets in Starwars history`
})
    .catch(err => console.log(err))
    .finally(() => {
        changeButton.addEventListener("click", function () {
             console.log(starWarsCount("starships")) // pending..  response Array
            starWarsCount("starships").then(response => {
                let random = Math.floor(Math.random() * response.length)
                spinner.src = `${url}/${response[random].image}`
            })
        })
    })
//starWarsCount("planets")
// starWarsCount("species")
// starWarsCount("people")
// starWarsCount("starships")
// starWarsCount("vehicles")