const secretLogin = document.querySelector('#secret-login');
const loginBtn = document.querySelector('#login-btn');

secretLogin.addEventListener('mouseenter', () => {
    loginBtn.classList.toggle('show');
});

secretLogin.addEventListener('mouseleave', () => {
    setTimeout(() => {
        loginBtn.classList.remove('show');
    }, 500)
});