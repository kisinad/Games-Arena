let gameData = [
    {title: 'Street Fighter', score: 9.0,genre:'Action', platform:'PC game', editors_choice:'', src:'./img' },
    {title: 'FIFA 18', score: 7.9,genre:'Role-playing', platform:'Microsoft-Xbox', editors_choice:'' },
    {title: 'Super Mario Bros', score: 9.0,genre:'Action-adventure', platform:'Xbox-360', editors_choice:'' },
    {title: 'League of Legends', score: 9.0,genre:'Role-playing', platform:'PlayStation 2', editors_choice:'' },
    {title: 'Gigantic', score: 9.0,genre:'Action', platform:'Nitendo', editors_choice:'' },
    {title: 'Mortal Kombat', score: 9.0,genre:'Action', platform:'Game Boy', editors_choice:'' },
    {title: 'Super Smash Bros', score: 9.0,genre:'Role-playing', platform:'Xbox-360', editors_choice:'' },
    {title: 'Apex Legends', score: 9.0,genre:'Action', platform:'Xbox-360', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' }
    
];
window.onload = () => {
    loadGameData(gameData);
}

function loadGameData (gameData) {
    for (var game of gameData){
    let newDiv = document.createElement('div');
    newDiv.className = "items";
    let newDivImg = document.createElement('div');
    newDivImg.className = "img-item";
    let newH3 = document.createElement('h3');
    newH3.className = "title";
    let newP = document.createElement('p');
    newP.className = "platform";
    
    let newImg = document.createElement('img'); // Creates img
    let newImgStar = document.createElement('img');
    newImg.setAttribute("src", "./img/image-placeholder1.png");
    let newSpanImg = document.createElement('span');
    newSpanImg.className = "star";
    newImgStar.setAttribute("src", "./img/star 25x25.png");
    let newSpanGenre = document.createElement('span');
    newSpanGenre.className = "genre";
    let newSpanName = document.createElement('span');
    let newSpanScore = document.createElement('span');
    newSpanScore.className = "score";
    let place = document.getElementsByClassName('main')[0];
    let item = place.getElementsByClassName('game-body')[0];
   
    let title = document.createTextNode(`${game.title}`);
        title.className = "title";
    item.appendChild(newDiv);
    newDiv.appendChild(newDivImg);
    newDiv.appendChild(newH3);
    newH3.append(game.title);
    newDiv.appendChild(newP);
    newDiv.appendChild(newSpanImg);
    newP.append(game.platform);
    newSpanImg.appendChild(newImgStar);
    newSpanGenre.appendChild(newSpanName);
    newSpanName.append('Genre:');
    newDiv.appendChild(newSpanGenre);
    newSpanGenre.append(game.genre);
    
    newDivImg.appendChild(newImg);
    newDiv.appendChild(newSpanScore);
    newSpanScore.append(game.score);
 }
}