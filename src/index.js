document.addEventListener("DOMContentLoaded",()=>
{
    initList();

    function initList()
    {
        return fetch('http://localhost:3000/games')
        .then(res=>res.json())
        .then(games=>
            {
                showGames(games[0]);
                games.forEach(game => 
                {
                    const h5=document.createElement('h5');
                    h5.textContent=`${game.name} (${game.manufacturer_name})`;
                    h5.addEventListener('click',()=>showGames(game));
                    document.querySelector('.game-list').append(h5);
                });
            })
    }

    function showGames(game)
    {
        document.querySelector('#detail-image').src=game.image;
        document.querySelector('#detail-title').textContent=game.name;
        document.querySelector('#detail-high-score').textContent=game.high_score;
    }

    document.querySelector('#high-score-form').addEventListener('submit', (e)=>
    {
        e.preventDefault();
        document.querySelector('#detail-high-score').textContent=document.querySelector("#score-input").value;
    })













})