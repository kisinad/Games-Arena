window.onload = () => {
    loadGameData(gameData);
    let numberOfVariables = $(".game-body .items").length;
    let limitPerPage = 10;
    $(".game-body .items:gt("+(limitPerPage-1)+")").hide();
    let totalPages = Math.round(numberOfVariables/limitPerPage);
    // alert(totalPages);
    $(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>"+1+"</a></li>");
   
    
    for (let i =2; i<=totalPages; i++){
        $(".pagination").append("<li class='current-page' class='page-item'><a class='page-link' href='javascript:void(0)'>"+i+"</a></li>")
    }
    $(".pagination").append("<li class='page-item'><a id='next-page' class='page-link' href='javascript:void(0)'>"+'Next'+"</a></li>");
    $(".pagination li.current-page").on("click", function(){
        if($(this).hasClass("active")){
            return false;
        }else{
            let currentPage = $(this).index();
            $(".pagination li").removeClass("active");
            $(this).addClass("active");
            $(".game-body .items").hide();
            let grandTotal = limitPerPage*currentPage;
            for (let i=grandTotal-limitPerPage; i<grandTotal; i++){
                $(".game-body .items:eq("+i+")").show();
            }
        }
        
    });
    $("#next-page").on("click", function(){
        let currentPage = $(".pagination li.active").index();
        if (currentPage==totalPages){
            return false;
        } else {
            currentPage++;
            $(".pagination li").removeClass("active");
            $(".game-body .items").hide();
            let grandTotal = limitPerPage*currentPage;
            for (let i=grandTotal-limitPerPage; i<grandTotal; i++){
                $(".game-body .items:eq("+i+")").show();
            }
            $(".pagination li.current-page:eq("+(currentPage-1)+")").addClass("active");
        }
    })
}




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
    {title: 'Resident Evil', score: 9.0,genre:'Action', platform:'playStation 2', editors_choice:'' },
    {title: 'Street Fighter', score: 9.0,genre:'Action', platform:'PC game', editors_choice:'', src:'./img' },
    {title: 'FIFA 18', score: 7.9,genre:'Role-playing', platform:'Microsoft-Xbox', editors_choice:'' },
    {title: 'Super Mario Bros', score: 9.0,genre:'Action-adventure', platform:'Xbox-360', editors_choice:'' },
    {title: 'League of Legends', score: 9.0,genre:'Role-playing', platform:'PlayStation 2', editors_choice:'' },
    {title: 'Gigantic', score: 9.0,genre:'Action', platform:'Nitendo', editors_choice:'' },
    {title: 'Street Fighter', score: 9.0,genre:'Action', platform:'PC game', editors_choice:'', src:'./img' },
    {title: 'FIFA 18', score: 7.9,genre:'Role-playing', platform:'Microsoft-Xbox', editors_choice:'' },
    {title: 'Super Mario Bros', score: 9.0,genre:'Action-adventure', platform:'Xbox-360', editors_choice:'' },
    {title: 'League of Legends', score: 9.0,genre:'Role-playing', platform:'PlayStation 2', editors_choice:'' },
    {title: 'Gigantic', score: 9.0,genre:'Action', platform:'Nitendo', editors_choice:'' }
    
];

function loadGameData (gameData) {
    for (let game of gameData){
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

// $(document).ready(function(){
//     let numberOfVariables = $('.game-body .items').length;
//     alert(numberOfVariables);
    
//     });