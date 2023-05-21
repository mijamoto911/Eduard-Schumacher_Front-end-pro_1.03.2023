function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.log('Error:', error);
        });
}
const filmUrls = [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/'
];
const filmPromises = filmUrls.map(url => fetchData(url));

Promise.all(filmPromises)
    .then(films => {
        const planetUrls = films.reduce((urls, film) => {
            return urls.concat(film.planets);
        }, []);
        const planetPromises = planetUrls.map(url => fetchData(url));
        return Promise.all(planetPromises);
    })
    .then(planets => {
        const planetNames = planets.map(planet => planet.name);
        console.log('planet names:', planetNames);
    })

fetchData("https://swapi.dev/api/starships/9/")
    .then(starship => {
        console.log(`The ship ${starship.name} all destroyed.`);
    })
    .catch(error => {
        console.log('Error:', error);
    });