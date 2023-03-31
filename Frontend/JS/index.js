
const username = localStorage.getItem("name1");
const usernamedisplay = document.getElementById("usernamedisplay");
console.log(username);

if (username) {
    var logout = document.createElement("span");
    logout.setAttribute("class", "logoutfunction");
    logout.textContent = " Log Out";
    document.getElementById("signintag").append(logout)

    usernamedisplay.textContent = username;
    console.log(username);
    usernamedisplay.style.color = "rgb(213,0,50)";
    usernamedisplay.style.fontSize = "17px";
    // usernamedisplay.style.fontWeight="bold";
    usernamedisplay.style.fontFamily = "Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    usernamedisplay.style.textDecoration = "none"

    // log out function

    // document.querySelector(".logoutfunction").addEventListener("click","gologout");
    logout.addEventListener("click", gologout)
    function gologout() {
        document.getElementById("signintag").textContent = "Sign In/Join now"
        window.location.href = "./signIn.html"
    }
}
else {
    usernamedisplay.textContent = "Sign In/Join now"

}

