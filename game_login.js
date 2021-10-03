function login(){
    player1name=document.getElementById("player1_name_input").value;
    player2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_key",player1name);
    localStorage.setItem("player2_key",player2name);
window.location="quiz_game_page.html";
}