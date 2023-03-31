const form = document.querySelector('form');
// show password
var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#confirmPassword');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    // this.classList.toggle('bi-eye');
});

// Saving data on localstorage
form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#confirmPassword').value;


    let accountData = JSON.parse(localStorage.getItem('account-data'));

    if (accountData === null) {
        accountData = [];
    }

    const newAccountData = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };
    //name for home
    var str = localStorage.getItem('name1');
    localStorage.setItem("name1", name);
    console.log(str);

    if (accountData.some((v) => { return v.email == email })) {
        alert("Please Enter Another Mail");
        form.email.value = "";
    }
    else {

        if (password == confirmPassword) {
            accountData.push(newAccountData);


            localStorage.setItem('account-data', JSON.stringify(accountData));

            alert('Account Created Successfully!');
            form.name.value = "";
            form.email.value = "";
            form.password.value = "";
            form.confirmPassword.value = "";
            window.location.href = "../HTML/login.html"

        } else {

            alert("Password and Confirm-Password not matched!")
            form.password.value = "";
            form.confirmPassword.value = "";

        }
    }



});