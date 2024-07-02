document.addEventListener('DOMContentLoaded', function() {

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }

    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }

    document.getElementById('loginForm').addEventListener('submit', function() {
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('password', document.getElementById('password').value);
    });
});