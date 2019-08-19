let gameData = [
    {title: 'Street Fighter', score: 9.0,genre:'Action', platform:'PC game', editors_choice:'' },
    {title: 'FIFA 18', score: 7.9,genre:'Role-playing', platform:'Microsoft-Xbox', editors_choice:'' },
    {title: 'Super Mario Bros', score: 9.0,genre:'Action-adventure', platform:'Xbox-360', editors_choice:'' },
    {title: 'League of Legends', score: 9.0,genre:'Role-playing', platform:'PlayStation 2', editors_choice:'' },
    {title: 'Gigantic', score: 9.0,genre:'Action', platform:'Nitendo', editors_choice:'' },
    {title: 'Mortal Kombat', score: 9.0,genre:'Action', platform:'Game Boy', editors_choice:'' },
    {title: 'Super Smash Bros', score: 9.0,genre:'Role-playing', platform:'Xbox-360', editors_choice:'' },
    {title: 'Apex Legends', score: 9.0,genre:'Action', platform:'Xbox-360', editors_choice:'' },
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    
];
window.onload = () => {
    loadGameData(gameData);
}

function loadGameData (gameData) {
    
    let newDiv = document.createElement('div');
    newDiv.className = "items";
    let newH3 = document.createElement('h3');
    newH3.className = "title";
    // let newP = document.createElement('p');
    // newP.className = "platform";
    // let newImg = document.createTextNode('img');
    // newImg.className = "star";
    // newImg.setAttribute('src', './img/star 25x25.png');
    // let newSpan1 = document.createTextNode('span');
    // newSpan1.className = "genre";
    // let newSpan2 = document.createTextNode('span');
    // newSpan2.className = "score";
// ----
    // let newDiv = document.createElement('div');
    // newDiv.className = "items";
    // let title = document.createTextNode('Title');
    // title.className = "title";
    // newDiv.appendChild(title);
    let place = document.getElementsByClassName('main')[0];
    let item = place.getElementsByClassName('game-body')[0];
    let gameHtml ='';
    for (let game of gameData){
        
        let title = document.createTextNode(`${game.title}`);
        title.className = "title";
        newDiv.appendChild(title);
    }
    console.log(gameHtml);
    console.log(place.appendChild(newDiv));
    item.appendChild(newDiv);
}