document.addEventListener('DOMContentLoaded', function() {
    // ローカルストレージからemailとpasswordを取得
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }

    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }

    document.getElementById('loginForm').addEventListener('submit', function() {
        // emailとpasswordをローカルストレージに保存
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('password', document.getElementById('password').value);
    });
});