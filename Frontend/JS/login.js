//checking
var form = document.querySelector('form');
var heading = document.querySelector('#heading');
var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    // this.classList.toggle('bi-eye');
});


form.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;


    var accountData = JSON.parse(localStorage.getItem('account-data'));
    var str = localStorage.getItem("name1")
    if (accountData !== null) {
        var matchingAccountData = accountData.find(account => account.email === email && account.password === password);

        if (matchingAccountData) {
            //  heading.textContent = 'Sign in Successful';

            alert(str + ', You are Welcome to SoleMate');
            //  alert("Welcome" + account. +"to FamousFootwear");
            window.location.href = "../index.html"


        } else {
            //  heading.textContent = 'Wrong Credentials';
            alert('Wrong Credintials !');
        }

    }


});
