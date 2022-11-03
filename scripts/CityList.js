import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js";

const walkerCities = getWalkerCities();
const cities = getCities();
const walkers = getWalkers();


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

