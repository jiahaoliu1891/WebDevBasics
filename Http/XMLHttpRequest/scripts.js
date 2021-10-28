let url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = () => {
    const superheroes = request.response;
    console.log(superheroes);
    // add title
    const title = document.createElement('h1');
    title.innerText = superheroes.squadName;
    const container = document.getElementById('container');
    container.appendChild(title);

    const heroList = document.createElement('ul');
    superheroes.members.forEach(hero => {
        // create a hero item
        let heroLi = document.createElement('li');
        heroLi.innerText = hero.name;
        heroList.appendChild(heroLi);
    });
    container.append(heroList);

}