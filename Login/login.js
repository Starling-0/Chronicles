document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

});


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleEye = document.getElementById("toggle-eye");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleEye.src = "../Login/img/eye.png";
    } else {
        passwordInput.type = "password";
        toggleEye.src = "../Login/img/hide.png";
    }
}