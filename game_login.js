function savenames(){
    var player1name =document.getElementById("player1_name").value;
    var player2name =document.getElementById("player2_name").value;

    localStorage.setItem("Player1Name",player1name);
    localStorage.setItem("Player2Name",player2name);

    window.location="game_page.html";

}

